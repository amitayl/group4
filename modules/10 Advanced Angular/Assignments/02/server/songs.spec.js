const { sortSongs } = require('./songs');

describe('Given an array and a sort method', () => {
    const sampleSongs = ['ZZ I Did It Again', 'VV Heart Go On', 'AA Lion Sleeps Tonight'];
    describe('When sorting the array by compare methos', () => {
        const newSampleSongs = sortSongs(sampleSongs);
        it('Then array item in first place is smaller than the last one', () => {
            expect(newSampleSongs[0]).toBeLessThan(newSampleSongs[length-1])
        });
    })
});