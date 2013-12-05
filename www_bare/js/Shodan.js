var Shodan = function() {
    this.currentNote = 0;
    this.sequences = [];
    this.playing = false;
    window.setInterval(this.run.bind(this),200)
    var _this = this;
    $('.play').click(function(){
        _this.playing = true;
    });
    $('.pause').click(function(){
        _this.playing = false;
    });
};

Shodan.prototype.run = function(){
    if(!this.playing){
        return;
    }
    $('.note').removeClass("playing");
    for(var i = 0 ; i < this.sequences.length; i++){
        var n = this.sequences[i][this.currentNote];
        $(n.noteElement).addClass('playing');
        if(n.sequence.notes[n.noteIndex]){
            n.sound.play();
        }
    }
    this.currentNote++;
    this.currentNote %= this.sequences[0].length;
};

Shodan.prototype.loadSong = function(song) {
    this.sequences = [];
    $('.sequencer').html('');
    for(var i = 0 ; i < song.sequences.length; i++){
        this.loadSequence(song.sequences[i]);
    }
    this.song = song;
};

Shodan.prototype.loadSequence = function(sequence) {
    var s = [];
    var sound = new Howl({urls: [sequence.sound]});
    var seq = $('<div class="sequence"></div>');
    for(var i = 0 ; i < sequence.notes.length; i++){
        s.push(this.createNote(sequence,i,sound,seq));
    }
    this.sequences.push(s);
    $('.sequencer').append(seq);
};


Shodan.prototype.createNote = function(sequence,noteIndex,sound,sequenceElement) {
    var noteElement = $('<div class="note"></div>')
    if(sequence.notes[noteIndex]){
        noteElement.addClass('on')
    }
    $(noteElement).click(function(){
        if(sequence.notes[noteIndex]){
            noteElement.removeClass('on')
            sequence.notes[noteIndex] = false;
        }
        else {
            noteElement.addClass('on')
            sequence.notes[noteIndex] = true;
        }
    });
    sequenceElement.append(noteElement);
    return {sequence:sequence,noteIndex:noteIndex,sound:sound,noteElement:noteElement};
};