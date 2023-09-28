---
title: "Software"
date: 2022-11-23T12:17:03+01:00
draft: false
type: page
showTableOfContents: true
---

<!-- title is already available from the headers -->

I enjoy translating the research that I do into software that can be used by engineers, consultants and practitioners.

Here you can find some of the open-source projects that I have recently been working on.


## Numerical models
### Scatter
[Scatter](https://github.com/PlatypusBytes/scatter) is a 3D FEM model that models wave propagation on
spatial varying subsurface.

_Subsurface with spatial variability_:
![](/RF_theta_1_5.png)

_Wave propagation on subsurface with spatial variability_:
![](/RF_theta1_ani1.gif)

With Scatter it is also possible to model the passage of trains on spatial varying subsurface.
The train is modelled with the [ROSE](#rose) model.

_Train traveling on random media_:
![](/scatter_rose.gif)


### ROSE
[ROSE](https://github.com/PlatypusBytes/ROSE/) is a train/track interaction model.
It can simulate the passage of trains, changes in track stiffness and the presence of discontinuities along the railway track.

_Train traveling over a transition zone_:
![](/TZ.gif)


## Data models
### ROSE network analyses
[Dashboard](https://github.com/PlatypusBytes/ROSE-dashboard) to visualise the results obtained by combining [ROSE](#rose) with railway track data.
The data is incorporated in the model by using [Kalman filtering](https://en.wikipedia.org/wiki/Kalman_filter),
[clustering](https://en.wikipedia.org/wiki/Cluster_analysis) and
[inverse analysis](https://en.wikipedia.org/wiki/Inverse_problem).

_Railway track settlement at network level_:
![](/dashboard.gif)

### Data Fusion Tools
The [Data Fusion Tools](https://bitbucket.org/DeltaresGEO/datafusiontools/) are a framework to
combine different data sets to perform subsurface schematisations and parametrisations, using AI.

The general idea behind data fusion is that the combination of results from multiple data sources,
leads to more and better information, than using a single data source.
Multiple data sources providing redundant information increase reliability and reduce uncertainty.
Complementary information from distinct sources enhances the quality of the output information,
by either increasing the spatial and temporal coverage, increase robustness,
reduce noise and increase estimation accuracy, which would not be possible to achieve by using
just information from a single individual data source.

_Prediction of CPT data using data fusion of CPT, resistivity and geomorphological data_:
![](/CPTs.png)

_Visualisation of data fusion data_:
![](/data_fusion.gif)

### Optimisation of testing location for subsurface mapping
[Super learn](https://bitbucket.org/zuada/cpt_super_learn.git) makes use of
[reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) to determine the optimal locations for
the execution of subsurface testing, in order to minimise the costs and errors.

_Visualisation of the training_:
![](/reinf_learn.gif)

### Random Layers
[Random Layers](https://github.com/brunozc/RandomLayers) generates Random Fields and Conditional Random Fields
for multi-layered systems.

Overview 3D                |  Slice view
:-------------------------:|:-------------------------:
![](/RF.png)               |  ![](/RF.gif)

### OURS
[OURS](https://github.com/rivm-syso/OURS/) is the Dutch calculation method for railway induced vibrations.
This model allows the estimation of the vibration level in dwellings nearby railway tracks.

_Subsurface schematisation in OURS_:
![](/ours.gif)


## Tools and utilities

### BRO reader
[CPT connection](https://github.com/PlatypusBytes/GeoDataReader)  to the BRO to request and parse CPT data.

### Signal processing
[Signal processing tools](https://github.com/PlatypusBytes/SignalProcessing) for time signals
(filtering, integration, windowing, FFT, PSD).

### Dynamic stiffness
[Dynamic stiffness](https://github.com/PlatypusBytes/WolfStiffness) following
[Wolf & Deeks (2004)](https://www.elsevier.com/books/foundation-vibration-analysis/wolf/978-0-7506-6164-5).

### Dynamic solvers
[Numerical solvers](https://github.com/PlatypusBytes/solvers/) for dynamic equilibrium equations.
