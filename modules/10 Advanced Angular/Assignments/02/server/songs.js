function sortSongs(songs) {
    const songsArr = [...songs];
    songsArr.sort(compare);
    return songsArr;
}

function compare(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}

module.exports = {
    sortSongs
}
