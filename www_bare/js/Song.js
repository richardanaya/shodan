var Song = function(song) {
    if(song){
        this.sequences = JSON.parse(song);
        return;
    }
    else {
        this.sequences = [];
        this.sequences.push({sound:"sounds/ghost_hack_0.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
        this.sequences.push({sound:"sounds/ghost_hack_1.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
        this.sequences.push({sound:"sounds/ghost_hack_5.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
        this.sequences.push({sound:"sounds/ghost_hack_7.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
        this.sequences.push({sound:"sounds/ghost_hack_10.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
        this.sequences.push({sound:"sounds/ghost_hack_6.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
        this.sequences.push({sound:"sounds/ghost_hack_8.wav", notes:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
    }
}

Song.prototype.toJson = function() {
    return JSON.stringify(this.sequences);
}