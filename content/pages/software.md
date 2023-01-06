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
[Scatter](https://bitbucket.org/DeltaresGEO/scatter/) is a 3D FEM model that models wave propagation on spatial varying subsoil.

_Wave propagation on random media_:
![](/RF_theta1_ani1.gif)

With Scatter it is also possible to model the passage of trains on spatial varying subsoil.

_Train traveling on random media_:
![](/scatter_rose.gif)


### ROSE
[ROSE](https://bitbucket.org/DeltaresGEO/rose/) is a train/track interaction model.
It can simulate the passage of trains, changes in track stiffness and the presence of discontinuities along the railway track.

_Train traveling over a transition zone_:
![](/TZ.gif)


## Data models
### ROSE dashboard
Dashboard to visualise the results obtained by combining [ROSE](#rose) with railway track data.
The data is incorporated in the model by using [Kalman filtering](https://en.wikipedia.org/wiki/Kalman_filter),
[clustering](https://en.wikipedia.org/wiki/Cluster_analysis) and
[inverse analysis](https://en.wikipedia.org/wiki/Inverse_problem).

_Railway track settlement at network level_:
![](/dashboard.gif)

### OURS
[OURS](https://github.com/rivm-syso/OURS/) is the Dutch calculation method for railway induced vibrations.
This model allows the estimation of the vibration level in dwellings nearby railway tracks.

_Subsoil schematisation in OURS_:
![](/ours.gif)


### Data Fusion Tools
The [Data Fusion Tools](https://bitbucket.org/DeltaresGEO/datafusiontools/) are a framework to
combine different data sets to perform subsoil schematisations and parametrisations, using AI.

The general idea behind data fusion is that the combination of results from multiple data sources,
leads to more and better information, than using a single data source.
Multiple data sources providing redundant information increase reliability and reduce uncertainty.
Complementary information from distinct sources enhances the quality of the output information,
by either increasing the spatial and temporal coverage, increase robustness,
reduce noise and increase estimation accuracy, which would not be possible to achieve by using
just information from a single individual data source.

_Prediction of CPT data using data fusion of CPT and geomorphological data_:
![](/CPTs.png)

_Visualisation of data_:
![](/data_fusion.gif)

### Random Layers
[Random Layers](https://bitbucket.org/DeltaresGEO/randomlayers) generates Random Fields and Conditional Random Fields
for multi-layered systems.

![](/RF.gif)

## Tools and utilities

### BRO reader
[CPT connection]([https://bitbucket.org/DeltaresGEO/bro_reader/)  to the BRO to request and parse CPT data.

### Signal processing
[Signal processing tools](https://bitbucket.org/DeltaresGEO/signalprocessing/) for time signals
(filtering, integration, windowing, FFT, PSD).

### Dynamic stiffness
[Dynamic stiffness](https://bitbucket.org/DeltaresGEO/wolfstiff/) following
[Wolf & Deeks (2004)](https://www.elsevier.com/books/foundation-vibration-analysis/wolf/978-0-7506-6164-5).

### Dynamic solvers
[Numerical solvers](https://bitbucket.org/DeltaresGEO/solvers/) for dynamic equilibrium equations.
