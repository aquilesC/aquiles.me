## How to simulate the plasmon resonance using discrete dipole approximation

Many years ago, I used ADDA to calculate plasmon resonances of gold nanorods while they were etched by potassium cyanide (DOI: [https://doi.org/10.1039/C6CP01679K](https://doi.org/10.1039/C6CP01679K)). I wrote the code in Python and is available here ([https://github.com/aquilesC/plasmon_adda](https://github.com/aquilesC/plasmon_adda)). 

This tutorial explains the architecture and design decisions behind the `plasmon-adda` package. It is intended for users who want to understand how to automate ADDA simulations using Python.
## Architecture Overview

The project is structured as a standard Python package to ensure modularity, ease of installation, and reusability.

```
plasmon_adda/
├── src/
│ └── plasmon_adda/
│ ├── __init__.py # Package marker
│ ├── cli.py # Command-Line Interface entry points
│ ├── simulation.py # Core logic for single simulations
│ ├── batch.py # Logic for parallel batch processing
│ ├── plotting.py # Logic for data visualization
│ └── indexes.py # Material properties (Refractive Indices)
├── pyproject.toml # Package metadata and dependencies
└── README.md # General usage instructions
```
## Core Components

### 1. Material Properties (`indexes.py`)
**Design Goal**: Encapsulate complex refractive index data handling.

Instead of hardcoding values or parsing files repeatedly, we use a `RefractiveIndex` base class. This class handles:

- Reading raw data files (Wavelength vs Real/Imaginary Index).
- Interpolating the data using `scipy.interpolate` to allow querying the refractive index at *any* arbitrary wavelength.

**Extensibility**: To add a new material (e.g., Silver), you simply subclass `RefractiveIndex` and point it to the new data file.

```python
class SilverIndex(RefractiveIndex):
    def __init__(self):
        super().__init__('METALS_Silver_Johnson.txt')
```

### 2. Adaptive Simulation (`simulation.py`)

**Design Goal**: Efficiently resolve spectral peaks without wasting computation on flat regions.

The `run_simulation` function implements an adaptive step-size algorithm ("Smart Search"):
1.  **Initialization**: It starts at a given wavelength (e.g., 550nm).
2.  **Step Adjustment**: It calculates the slope ("difference") of the Extinction Efficiency (`Q_ext`) between previous steps.
    - **Fast Change (Peak)**: If the slope is steep, the step size decreases (down to 2nm) to capture fine details.
    - **Slow Change**: If the slope is flat, the step size increases (up to 15nm) to speed up the process.
3.  **Peak Detection**: It tracks if it has passed a peak (slope sign change) and stops the simulation 100nm after the peak is confirmed.

**ADDA Integration**:
We use the `subprocess` module to call the binary `adda` tool. This separates the physics engine (ADDA) from the control logic (Python).
- **Command Construction**: Arguments like `-shape`, `-size`, and `-m` (refractive index) are dynamically built.
- **Output Parsing**: We capture standard output (`stdout`) and robustly parse the key metrics (`Q_ext`, `C_ext`, etc.).

### 3. Parallel Batch Processing (`batch.py`)

**Design Goal**: Scale simulations across multiple CPU cores.

Since ADDA simulations for different geometries are independent, they are "embarrassingly parallel."
- We use `concurrent.futures.ProcessPoolExecutor` to spawn a pool of worker processes.
- Each worker runs an instance of `run_simulation` for a specific configuration (e.g., a specific Length).
- This drastically reduces total computation time compared to a sequential loop.

### 4. Command-Line Interface (`cli.py`)

**Design Goal**: Make the tools accessible from the terminal without modifying code.

We use `argparse` to define user-friendly commands.
- **Entry Points**: `pyproject.toml` maps these functions to commands like `plasmon-run`.
- This allows you to run simulations on a remote server or cluster just by typing a command, making it easy to script and automate.

## How to Extend

If you want to simulate different shapes or materials:
1.  **Modify `indexes.py`**: Add your new material class.
2.  **Update `simulation.py`**:
    - Change `AuIndex()` to your new material class.
    - Update the `cmd` list to use different shapes (e.g., change `-shape capsule` to `-shape sphere`).
## Conclusion
This architecture separates concerns: **Data** (indexes), **Logic** (simulation), **Scaling** (batch), and **Interface** (CLI). This makes the code easier to test, debug, and extend.