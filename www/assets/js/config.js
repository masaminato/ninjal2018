

waldayu.transducers["hyoomuni_compare"] = (function() {
    var correspondences = {'m': "m'", 'n': "n'", 'y': "y'", 'u': 'wu', 'i': 'yi'};
    var keys = ['m', 'n', 'y', 'u', 'i'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Hyoomuni",
        "underlying": "",
        "compare": "hyoomuni_compare",
        "lettersInLanguage" : ['a', 'i', 'ii', 'u', 'uu', 'e', 'ee', 'o', 'oo', 'k', 'ky', 'g', 'gy', 's', 'sh', 'z', 'zy', 't', 'ch', 'd', 'n', "n'", 'ny', "n'y", 'h', 'p', 'b', 'm', 'm', 'y', 'r', 'w', 'w']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
