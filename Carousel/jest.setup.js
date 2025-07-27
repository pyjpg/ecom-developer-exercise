import '@testing-library/jest-dom';
import "regenerator-runtime/runtime";

window.matchMedia = 
    window.matchMedia ||
    function() {
        return{
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };