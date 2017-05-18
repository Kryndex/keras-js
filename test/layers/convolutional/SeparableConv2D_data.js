// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'convolutional.SeparableConv2D.0': {
      expected: {
        shape: [3, 3, 4],
        data: [
          0.347301,
          -0.450018,
          0.214435,
          -0.122483,
          0.681388,
          -0.108314,
          -0.567933,
          -0.470343,
          0.87774,
          -0.40253,
          -0.395911,
          -0.527773,
          -0.689291,
          -0.150623,
          0.906613,
          0.55307,
          0.046712,
          0.336893,
          -0.478398,
          -0.134498,
          -0.377228,
          0.116938,
          0.241701,
          0.243471,
          0.512934,
          -1.336098,
          1.173709,
          0.018511,
          0.921619,
          -0.639221,
          -0.139291,
          -0.489842,
          -0.226879,
          0.209393,
          -0.032122,
          0.105134
        ]
      },
      input: {
        shape: [5, 5, 2],
        data: [
          0.133215,
          0.397273,
          -0.645113,
          -0.216224,
          -0.394447,
          0.467848,
          0.86766,
          0.712237,
          -0.19358,
          -0.889668,
          -0.846705,
          0.838136,
          0.075205,
          -0.066286,
          -0.508764,
          -0.052183,
          0.347896,
          0.955889,
          0.941462,
          0.048041,
          0.777089,
          0.64464,
          0.591418,
          0.132861,
          0.255779,
          -0.204615,
          0.144295,
          0.294353,
          -0.652583,
          -0.089829,
          0.724848,
          -0.094612,
          0.689771,
          -0.852965,
          0.982654,
          -0.640659,
          0.260924,
          -0.642287,
          -0.447322,
          -0.084257,
          0.499578,
          0.458206,
          0.166239,
          -0.867684,
          -0.820507,
          -0.82673,
          0.508849,
          -0.324211,
          -0.403243,
          -0.396073
        ]
      },
      weights: [
        {
          shape: [3, 3, 2, 1],
          data: [
            0.666786,
            -0.353131,
            -0.240332,
            -0.38687,
            0.133215,
            0.397273,
            -0.645113,
            -0.216224,
            -0.394447,
            0.467848,
            0.86766,
            0.712237,
            -0.19358,
            -0.889668,
            -0.846705,
            0.838136,
            0.075205,
            -0.066286
          ]
        },
        {
          shape: [1, 1, 2, 4],
          data: [0.666786, -0.353131, -0.240332, -0.38687, 0.133215, 0.397273, -0.645113, -0.216224]
        },
        { shape: [4], data: [0.666786, -0.353131, -0.240332, -0.38687] }
      ]
    },
    'convolutional.SeparableConv2D.1': {
      expected: {
        shape: [3, 3, 4],
        data: [
          2.19505,
          0.0,
          0.0,
          0.0,
          1.195129,
          0.0,
          0.0,
          0.0,
          1.986473,
          0.0,
          0.0,
          0.0,
          1.623991,
          0.0,
          0.0,
          0.0,
          0.185464,
          0.333382,
          0.0,
          0.0,
          1.187908,
          0.0,
          0.0,
          0.0,
          4.113844,
          0.0,
          0.0,
          0.0,
          1.904537,
          0.0,
          0.0,
          0.0,
          1.652338,
          0.0,
          0.0,
          0.0
        ]
      },
      input: {
        shape: [5, 5, 2],
        data: [
          -0.545921,
          0.232389,
          0.847715,
          0.89607,
          0.43103,
          -0.580595,
          0.071097,
          -0.585765,
          0.455214,
          0.246244,
          0.262284,
          0.716287,
          -0.119742,
          0.554698,
          0.089926,
          -0.603549,
          0.140919,
          -0.689449,
          -0.217521,
          0.369626,
          0.813592,
          -0.466877,
          -0.126697,
          0.486853,
          0.500026,
          -0.431407,
          0.514942,
          0.299339,
          0.209904,
          0.057988,
          0.096417,
          -0.802248,
          -0.470777,
          0.305254,
          0.176224,
          -0.556171,
          0.917974,
          0.231821,
          0.587728,
          -0.471027,
          0.915874,
          -0.240508,
          0.924083,
          -0.534734,
          0.69266,
          -0.358515,
          0.023925,
          -0.069703,
          -0.854801,
          0.177388
        ]
      },
      weights: [
        {
          shape: [3, 3, 2, 2],
          data: [
            0.881347,
            -0.297584,
            -0.231119,
            -0.809629,
            -0.545921,
            0.232389,
            0.847715,
            0.89607,
            0.43103,
            -0.580595,
            0.071097,
            -0.585765,
            0.455214,
            0.246244,
            0.262284,
            0.716287,
            -0.119742,
            0.554698,
            0.089926,
            -0.603549,
            0.140919,
            -0.689449,
            -0.217521,
            0.369626,
            0.813592,
            -0.466877,
            -0.126697,
            0.486853,
            0.500026,
            -0.431407,
            0.514942,
            0.299339,
            0.209904,
            0.057988,
            0.096417,
            -0.802248
          ]
        },
        {
          shape: [1, 1, 4, 4],
          data: [
            0.881347,
            -0.297584,
            -0.231119,
            -0.809629,
            -0.545921,
            0.232389,
            0.847715,
            0.89607,
            0.43103,
            -0.580595,
            0.071097,
            -0.585765,
            0.455214,
            0.246244,
            0.262284,
            0.716287
          ]
        },
        { shape: [4], data: [0.881347, -0.297584, -0.231119, -0.809629] }
      ]
    },
    'convolutional.SeparableConv2D.2': {
      expected: {
        shape: [3, 3, 16],
        data: [
          0.0,
          3.072657,
          6.661696,
          1.212774,
          0.0,
          1.942042,
          0.796062,
          0.0,
          0.0,
          0.0,
          0.0,
          5.353453,
          3.169381,
          1.709415,
          0.532102,
          0.0,
          0.0,
          2.380967,
          1.057094,
          1.124686,
          2.482994,
          0.636369,
          0.0,
          0.177999,
          0.501644,
          0.346187,
          1.655334,
          2.568588,
          3.838684,
          2.13677,
          0.0,
          0.0,
          0.244367,
          0.0,
          0.0,
          0.040463,
          1.887684,
          0.447473,
          0.0,
          0.0,
          0.392063,
          0.461429,
          0.740828,
          0.0,
          2.889798,
          1.202188,
          0.0,
          2.990209,
          0.263581,
          1.668686,
          0.0,
          0.922838,
          4.010374,
          4.709476,
          0.243737,
          0.0,
          0.0,
          1.455777,
          0.447792,
          1.249569,
          0.999484,
          1.986179,
          0.0,
          1.88698,
          0.0,
          1.823954,
          2.261445,
          1.535919,
          0.0,
          0.0,
          0.351947,
          0.762176,
          0.57681,
          2.735742,
          0.865883,
          2.213735,
          3.139838,
          0.0,
          0.150018,
          0.0,
          0.0,
          0.169024,
          2.122756,
          0.0,
          0.0,
          0.0,
          2.703279,
          0.0,
          0.0,
          1.452518,
          0.0,
          1.760357,
          2.195201,
          1.397283,
          0.647357,
          1.03469,
          1.720459,
          0.787799,
          1.818606,
          0.0,
          0.0,
          3.229915,
          0.0,
          0.0,
          0.0,
          0.808574,
          0.0,
          0.0,
          0.0,
          3.093279,
          0.0,
          0.0,
          0.0,
          0.0,
          6.157512,
          0.969973,
          2.362686,
          1.642857,
          1.567341,
          0.0,
          0.0,
          1.257981,
          0.0,
          3.347936,
          4.853856,
          0.584134,
          1.831214,
          0.368586,
          0.670326,
          2.258959,
          1.897032,
          1.452034,
          2.995703,
          4.086173,
          2.613929,
          0.0,
          0.0,
          1.276499,
          0.986229,
          4.405969,
          1.252966,
          1.100708,
          0.0,
          0.0
        ]
      },
      input: {
        shape: [5, 5, 4],
        data: [
          -0.884929,
          0.043746,
          -0.621581,
          0.85929,
          0.990731,
          -0.792113,
          -0.248862,
          0.73592,
          0.776986,
          -0.737512,
          0.171503,
          0.087118,
          0.837766,
          0.029361,
          -0.527272,
          0.147416,
          0.365717,
          -0.096697,
          -0.51945,
          0.201977,
          -0.009271,
          -0.127708,
          -0.256995,
          -0.276956,
          -0.161184,
          0.128936,
          0.760311,
          0.372614,
          -0.370107,
          -0.727062,
          -0.563261,
          0.591426,
          0.272393,
          -0.93231,
          -0.928845,
          -0.643906,
          0.089174,
          0.384091,
          0.007193,
          -0.367848,
          -0.38731,
          -0.234478,
          -0.308496,
          -0.678848,
          -0.207197,
          0.253484,
          -0.34155,
          0.908772,
          0.089221,
          0.623042,
          0.166206,
          -0.112566,
          0.332798,
          -0.223755,
          0.964719,
          0.218697,
          -0.330948,
          -0.353988,
          -0.054023,
          0.932003,
          0.029574,
          0.639507,
          0.011236,
          -0.281541,
          0.737159,
          -0.578811,
          0.394064,
          0.143987,
          0.857385,
          0.817422,
          0.935796,
          -0.679153,
          0.290835,
          0.583472,
          0.714901,
          0.848205,
          -0.012259,
          -0.978666,
          -0.311411,
          0.311485,
          0.832908,
          -0.320367,
          -0.979657,
          -0.595945,
          -0.478919,
          -0.594402,
          -0.073486,
          0.082921,
          0.801928,
          0.980857,
          0.457544,
          -0.81261,
          0.653583,
          0.201305,
          -0.792085,
          0.341976,
          0.600744,
          -0.250584,
          0.266331,
          -0.843281
        ]
      },
      weights: [
        {
          shape: [3, 3, 4, 3],
          data: [
            -0.358,
            0.51151,
            0.75604,
            0.386489,
            0.569431,
            0.817873,
            0.457721,
            -0.408117,
            -0.449859,
            0.424449,
            0.082829,
            0.998103,
            0.945015,
            0.709712,
            -0.370497,
            0.356245,
            -0.884929,
            0.043746,
            -0.621581,
            0.85929,
            0.990731,
            -0.792113,
            -0.248862,
            0.73592,
            0.776986,
            -0.737512,
            0.171503,
            0.087118,
            0.837766,
            0.029361,
            -0.527272,
            0.147416,
            0.365717,
            -0.096697,
            -0.51945,
            0.201977,
            -0.009271,
            -0.127708,
            -0.256995,
            -0.276956,
            -0.161184,
            0.128936,
            0.760311,
            0.372614,
            -0.370107,
            -0.727062,
            -0.563261,
            0.591426,
            0.272393,
            -0.93231,
            -0.928845,
            -0.643906,
            0.089174,
            0.384091,
            0.007193,
            -0.367848,
            -0.38731,
            -0.234478,
            -0.308496,
            -0.678848,
            -0.207197,
            0.253484,
            -0.34155,
            0.908772,
            0.089221,
            0.623042,
            0.166206,
            -0.112566,
            0.332798,
            -0.223755,
            0.964719,
            0.218697,
            -0.330948,
            -0.353988,
            -0.054023,
            0.932003,
            0.029574,
            0.639507,
            0.011236,
            -0.281541,
            0.737159,
            -0.578811,
            0.394064,
            0.143987,
            0.857385,
            0.817422,
            0.935796,
            -0.679153,
            0.290835,
            0.583472,
            0.714901,
            0.848205,
            -0.012259,
            -0.978666,
            -0.311411,
            0.311485,
            0.832908,
            -0.320367,
            -0.979657,
            -0.595945,
            -0.478919,
            -0.594402,
            -0.073486,
            0.082921,
            0.801928,
            0.980857,
            0.457544,
            -0.81261
          ]
        },
        {
          shape: [1, 1, 12, 16],
          data: [
            -0.358,
            0.51151,
            0.75604,
            0.386489,
            0.569431,
            0.817873,
            0.457721,
            -0.408117,
            -0.449859,
            0.424449,
            0.082829,
            0.998103,
            0.945015,
            0.709712,
            -0.370497,
            0.356245,
            -0.884929,
            0.043746,
            -0.621581,
            0.85929,
            0.990731,
            -0.792113,
            -0.248862,
            0.73592,
            0.776986,
            -0.737512,
            0.171503,
            0.087118,
            0.837766,
            0.029361,
            -0.527272,
            0.147416,
            0.365717,
            -0.096697,
            -0.51945,
            0.201977,
            -0.009271,
            -0.127708,
            -0.256995,
            -0.276956,
            -0.161184,
            0.128936,
            0.760311,
            0.372614,
            -0.370107,
            -0.727062,
            -0.563261,
            0.591426,
            0.272393,
            -0.93231,
            -0.928845,
            -0.643906,
            0.089174,
            0.384091,
            0.007193,
            -0.367848,
            -0.38731,
            -0.234478,
            -0.308496,
            -0.678848,
            -0.207197,
            0.253484,
            -0.34155,
            0.908772,
            0.089221,
            0.623042,
            0.166206,
            -0.112566,
            0.332798,
            -0.223755,
            0.964719,
            0.218697,
            -0.330948,
            -0.353988,
            -0.054023,
            0.932003,
            0.029574,
            0.639507,
            0.011236,
            -0.281541,
            0.737159,
            -0.578811,
            0.394064,
            0.143987,
            0.857385,
            0.817422,
            0.935796,
            -0.679153,
            0.290835,
            0.583472,
            0.714901,
            0.848205,
            -0.012259,
            -0.978666,
            -0.311411,
            0.311485,
            0.832908,
            -0.320367,
            -0.979657,
            -0.595945,
            -0.478919,
            -0.594402,
            -0.073486,
            0.082921,
            0.801928,
            0.980857,
            0.457544,
            -0.81261,
            0.653583,
            0.201305,
            -0.792085,
            0.341976,
            0.600744,
            -0.250584,
            0.266331,
            -0.843281,
            0.979529,
            0.365773,
            -0.230166,
            -0.370554,
            0.734026,
            -0.031139,
            0.622094,
            -0.495057,
            0.58768,
            0.263712,
            -0.859123,
            -0.743123,
            0.088502,
            0.910172,
            -0.76957,
            0.574371,
            0.960999,
            0.991421,
            0.552149,
            0.687608,
            -0.431448,
            0.596874,
            -0.714906,
            0.776227,
            -0.48485,
            0.323601,
            -0.015865,
            0.975984,
            -0.540102,
            -0.80204,
            -0.507786,
            0.904598,
            0.90617,
            -0.641009,
            -0.936083,
            0.56915,
            0.707795,
            0.108153,
            -0.513007,
            -0.799546,
            0.31635,
            -0.298318,
            0.91951,
            0.921564,
            -0.886548,
            0.098168,
            0.968955,
            -0.43456,
            -0.4838,
            -0.512742,
            0.84823,
            0.21242,
            -0.635309,
            -0.145343,
            -0.624581,
            0.243133,
            0.240078,
            0.104123,
            0.875559,
            0.389553,
            0.900901,
            -0.865033,
            0.893151,
            -0.293035,
            -0.241736,
            -0.021591,
            -0.384165,
            0.073765,
            -0.937717,
            -0.771158,
            -0.221093,
            0.874692,
            0.610068,
            -0.767109,
            0.001945,
            -0.660005
          ]
        },
        {
          shape: [16],
          data: [
            -0.358,
            0.51151,
            0.75604,
            0.386489,
            0.569431,
            0.817873,
            0.457721,
            -0.408117,
            -0.449859,
            0.424449,
            0.082829,
            0.998103,
            0.945015,
            0.709712,
            -0.370497,
            0.356245
          ]
        }
      ]
    },
    'convolutional.SeparableConv2D.3': {
      expected: {
        shape: [2, 2, 4],
        data: [
          0.493029,
          0.0,
          0.172868,
          0.0,
          1.312607,
          0.0,
          0.0,
          0.0,
          0.19444,
          0.105527,
          0.0,
          0.0,
          0.262073,
          0.015703,
          0.0,
          0.0
        ]
      },
      input: {
        shape: [5, 5, 2],
        data: [
          0.620403,
          -0.945685,
          0.554492,
          0.145757,
          -0.668254,
          -0.102765,
          -0.313849,
          -0.527573,
          0.70103,
          0.569257,
          0.431741,
          0.829388,
          0.729616,
          -0.61478,
          0.698196,
          0.758288,
          -0.776354,
          0.043486,
          0.118144,
          -0.573699,
          -0.135688,
          -0.820887,
          0.216593,
          0.883644,
          0.429352,
          -0.471163,
          0.735991,
          0.175361,
          0.712349,
          -0.294722,
          0.028816,
          0.423103,
          -0.223071,
          0.102386,
          -0.307802,
          0.501519,
          0.305004,
          -0.691112,
          0.866549,
          0.393944,
          0.366401,
          -0.132872,
          -0.712304,
          0.061523,
          -0.87309,
          0.060624,
          -0.26679,
          -0.935888,
          0.873897,
          -0.83769
        ]
      },
      weights: [
        {
          shape: [3, 3, 2, 1],
          data: [
            0.377928,
            -0.051821,
            -0.103487,
            -0.414631,
            0.620403,
            -0.945685,
            0.554492,
            0.145757,
            -0.668254,
            -0.102765,
            -0.313849,
            -0.527573,
            0.70103,
            0.569257,
            0.431741,
            0.829388,
            0.729616,
            -0.61478
          ]
        },
        {
          shape: [1, 1, 2, 4],
          data: [0.377928, -0.051821, -0.103487, -0.414631, 0.620403, -0.945685, 0.554492, 0.145757]
        },
        { shape: [4], data: [0.377928, -0.051821, -0.103487, -0.414631] }
      ]
    },
    'convolutional.SeparableConv2D.4': {
      expected: {
        shape: [5, 5, 4],
        data: [
          0.0,
          0.0,
          0.0,
          1.274639,
          0.0,
          0.0,
          0.0,
          0.605939,
          0.0,
          0.0,
          0.0,
          1.115433,
          0.0,
          0.0,
          0.0,
          1.387129,
          0.0,
          0.0,
          0.0,
          0.786538,
          0.0,
          0.0,
          0.0,
          1.292405,
          0.294379,
          0.072351,
          1.020217,
          0.0,
          0.0,
          0.0,
          0.510053,
          0.004305,
          0.0,
          0.0,
          0.0,
          1.326637,
          0.016231,
          0.0,
          0.523518,
          0.0,
          0.0,
          0.0,
          0.0,
          0.131063,
          0.086156,
          0.630381,
          0.0,
          0.358184,
          0.0,
          0.0,
          0.0,
          2.350895,
          0.0,
          0.0,
          0.353669,
          0.0,
          0.22602,
          0.684739,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.993245,
          0.0,
          0.0,
          0.0,
          0.811813,
          0.0,
          0.0,
          0.0,
          1.344548,
          0.036525,
          0.538957,
          0.0,
          0.444835,
          0.0,
          0.0,
          0.0,
          0.653008,
          0.0,
          0.0,
          0.14365,
          0.223034,
          0.0,
          0.0,
          0.00937,
          0.28599,
          0.0,
          0.0,
          0.0,
          0.855603,
          0.0,
          0.0,
          0.021215,
          0.016677,
          0.0,
          0.0,
          0.0,
          0.48765
        ]
      },
      input: {
        shape: [5, 5, 2],
        data: [
          -0.027871,
          0.42356,
          -0.842032,
          0.56074,
          0.097075,
          -0.687678,
          0.211609,
          -0.383519,
          -0.722563,
          -0.920196,
          0.901117,
          -0.140214,
          0.782672,
          0.395253,
          -0.421894,
          0.240522,
          0.313608,
          0.553496,
          0.892848,
          0.346932,
          0.708907,
          -0.168408,
          -0.608734,
          0.352148,
          -0.646845,
          -0.704696,
          0.706245,
          0.233727,
          -0.630529,
          0.214598,
          0.243023,
          -0.539184,
          -0.530638,
          -0.689965,
          0.804915,
          0.441358,
          0.04869,
          -0.872442,
          -0.769665,
          -0.172659,
          0.561906,
          -0.087356,
          -0.305674,
          0.156377,
          0.859227,
          0.61066,
          0.343536,
          -0.712298,
          0.034094,
          0.239021
        ]
      },
      weights: [
        {
          shape: [3, 3, 2, 1],
          data: [
            -0.286035,
            -0.386595,
            -0.443495,
            0.65068,
            -0.027871,
            0.42356,
            -0.842032,
            0.56074,
            0.097075,
            -0.687678,
            0.211609,
            -0.383519,
            -0.722563,
            -0.920196,
            0.901117,
            -0.140214,
            0.782672,
            0.395253
          ]
        },
        {
          shape: [1, 1, 2, 4],
          data: [-0.286035, -0.386595, -0.443495, 0.65068, -0.027871, 0.42356, -0.842032, 0.56074]
        },
        { shape: [4], data: [-0.286035, -0.386595, -0.443495, 0.65068] }
      ]
    },
    'convolutional.SeparableConv2D.5': {
      expected: {
        shape: [5, 5, 4],
        data: [
          0.862566,
          0.048018,
          0.241041,
          0.400052,
          0.351313,
          1.25112,
          0.63279,
          0.0,
          0.0,
          1.747549,
          0.151011,
          0.264638,
          0.607059,
          0.706304,
          0.064874,
          0.186923,
          0.607271,
          0.596091,
          0.0,
          0.0,
          0.0,
          1.1677,
          0.0,
          1.360053,
          0.0,
          1.767671,
          3.229443,
          2.93878,
          0.109303,
          1.31919,
          0.641564,
          0.839189,
          0.0,
          1.045304,
          0.0,
          1.160624,
          0.414675,
          0.675433,
          2.603644,
          1.58157,
          0.533043,
          0.821891,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.604507,
          2.244225,
          0.270241,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          2.564922,
          0.877675,
          1.179773,
          0.0,
          2.154162,
          0.0,
          0.0,
          0.0,
          0.0,
          0.667535,
          0.930289,
          0.0,
          0.355705,
          0.0,
          0.647852,
          0.738893,
          0.0,
          0.507023,
          0.0,
          0.395042,
          1.369129,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.355779,
          0.625898,
          0.101676,
          0.0,
          2.107639,
          0.37634,
          0.0,
          0.098033,
          0.0,
          0.895843,
          0.260409,
          0.86668,
          2.347926,
          0.302149
        ]
      },
      input: {
        shape: [5, 5, 2],
        data: [
          0.424309,
          0.939364,
          0.520832,
          -0.644457,
          0.295776,
          -0.625702,
          0.444817,
          0.507751,
          0.27355,
          -0.245684,
          -0.174924,
          -0.76745,
          -0.532202,
          -0.237121,
          0.291332,
          -0.844156,
          -0.555355,
          -0.170294,
          -0.15161,
          0.081458,
          0.932854,
          -0.540877,
          -0.862886,
          -0.360297,
          -0.406034,
          -0.593383,
          0.778915,
          -0.877735,
          -0.595981,
          0.164847,
          0.338339,
          0.933207,
          0.5686,
          0.93931,
          -0.596359,
          -0.191263,
          -0.20549,
          0.968537,
          0.467264,
          -0.983275,
          -0.430008,
          0.244891,
          -0.989142,
          0.45335,
          0.268861,
          -0.781933,
          -0.263702,
          -0.314199,
          -0.043672,
          0.057881
        ]
      },
      weights: [
        {
          shape: [3, 3, 2, 2],
          data: [
            0.652446,
            0.2318,
            0.819831,
            0.944374,
            0.940098,
            0.624866,
            -0.63481,
            -0.882357,
            0.81222,
            -0.44532,
            0.601451,
            -0.524795,
            -0.612798,
            0.792021,
            0.757943,
            0.30891,
            0.424309,
            0.939364,
            0.520832,
            -0.644457,
            0.295776,
            -0.625702,
            0.444817,
            0.507751,
            0.27355,
            -0.245684,
            -0.174924,
            -0.76745,
            -0.532202,
            -0.237121,
            0.291332,
            -0.844156,
            -0.555355,
            -0.170294,
            -0.15161,
            0.081458
          ]
        },
        {
          shape: [1, 1, 4, 4],
          data: [
            0.652446,
            0.2318,
            0.819831,
            0.944374,
            0.940098,
            0.624866,
            -0.63481,
            -0.882357,
            0.81222,
            -0.44532,
            0.601451,
            -0.524795,
            -0.612798,
            0.792021,
            0.757943,
            0.30891
          ]
        }
      ]
    },
    'convolutional.SeparableConv2D.6': {
      expected: {
        shape: [3, 3, 4],
        data: [
          0.0,
          0.53121,
          0.84218,
          0.0,
          0.0,
          0.352753,
          0.217608,
          0.46037,
          0.0,
          1.000543,
          0.426013,
          0.0,
          0.0,
          0.0,
          0.028174,
          0.0,
          0.772403,
          1.70105,
          0.833395,
          0.0,
          0.0,
          0.436665,
          1.699903,
          0.0,
          0.0,
          0.801162,
          0.478923,
          0.0,
          0.0,
          1.391281,
          1.419269,
          0.0,
          0.035231,
          0.011648,
          0.142694,
          0.0
        ]
      },
      input: {
        shape: [5, 5, 2],
        data: [
          0.570535,
          0.191906,
          0.198967,
          0.40347,
          0.997535,
          0.717759,
          -0.030665,
          -0.480131,
          -0.793351,
          -0.096084,
          -0.608614,
          0.582545,
          -0.311023,
          0.636141,
          -0.552496,
          -0.466095,
          0.673995,
          0.480495,
          -0.133135,
          -0.487911,
          -0.061628,
          -0.799714,
          -0.372442,
          0.051244,
          -0.242036,
          0.022129,
          -0.738668,
          -0.497968,
          -0.08996,
          0.67791,
          0.306663,
          0.434282,
          0.083813,
          -0.565874,
          -0.282824,
          -0.481839,
          0.799366,
          0.816717,
          -0.703778,
          0.804765,
          0.427984,
          0.445201,
          0.174055,
          -0.444629,
          -0.753315,
          -0.424704,
          0.43543,
          0.795045,
          -0.460225,
          0.351483
        ]
      },
      weights: [
        {
          shape: [3, 3, 2, 2],
          data: [
            -0.404522,
            0.654554,
            0.530772,
            -0.946748,
            0.570535,
            0.191906,
            0.198967,
            0.40347,
            0.997535,
            0.717759,
            -0.030665,
            -0.480131,
            -0.793351,
            -0.096084,
            -0.608614,
            0.582545,
            -0.311023,
            0.636141,
            -0.552496,
            -0.466095,
            0.673995,
            0.480495,
            -0.133135,
            -0.487911,
            -0.061628,
            -0.799714,
            -0.372442,
            0.051244,
            -0.242036,
            0.022129,
            -0.738668,
            -0.497968,
            -0.08996,
            0.67791,
            0.306663,
            0.434282
          ]
        },
        {
          shape: [1, 1, 4, 4],
          data: [
            -0.404522,
            0.654554,
            0.530772,
            -0.946748,
            0.570535,
            0.191906,
            0.198967,
            0.40347,
            0.997535,
            0.717759,
            -0.030665,
            -0.480131,
            -0.793351,
            -0.096084,
            -0.608614,
            0.582545
          ]
        },
        { shape: [4], data: [-0.404522, 0.654554, 0.530772, -0.946748] }
      ]
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()