function make_album(artist, title, tracks=null) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== null) {
        album.tracks = tracks;
    }
    return album;
}

// Creating album dictionaries
let album1 = make_album("Artist1", "Album1", 12);
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3", 8);

// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
