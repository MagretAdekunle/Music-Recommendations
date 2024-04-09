import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import artists from "../assets/js/artistsData";
import Pagination from "./Pagination";

export default function Artists() {
    const [artistData, setArtistData] = useState([]);

    useEffect(() => {
        fetch("/artist/json/")
            .then((res) => res.json())
            .then((data) => setArtistData(data.Artists));
        // .then((data) => console.log(data.Artists));
        // .then(console.log(artistData));
    }, []);

    let pageNum = useParams();
    pageNum = pageNum.pageNum;
    console.log(pageNum);

    // TODO: Is there a cleaner way to implement this?
    let sliceLowerRange = 0;
    let sliceUpperRange = 4;

    if (pageNum) {
        sliceUpperRange = pageNum * 4;
        sliceLowerRange = sliceUpperRange - 4;
    }
    const artistsSlice = artistData.slice(sliceLowerRange, sliceUpperRange);
    if (artistsSlice[0] == undefined) {console.log("it's undefined")}
    else {
        console.log("it's here")
        console.log(eval(artistsSlice[0].image))
    }
    // console.log(eval(artistsSlice[0].image))

    const artistsMap = artistsSlice.map((artist) => {
        return (
            <>
                {/* <div className="row"> TODO: Why does this have a row but albums does not?*/}
                <div className="col">
                    {" "}
                    {/* TODO: Why does this make it display well? */}
                    <table>
                        {/* <!-- <tr>
                                <td>
                                    <b> <a href="{{ url_for('showArtist', artist_name=artist)}}">{{ artist.name }}</a></b>
                                </td>
                            </tr> --> */}

                        <tr>
                            <td>
                                <img
                                    src={eval(artist.image)[1].url}
                                    alt={artist.name}
                                    className="artistOrAlbum--img"
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <b>{artist.name}</b>
                            </td>
                        </tr>

                        {/* <tr>
                            <td>
                                <b>Biography: </b> {artist.info}
                            </td>
                        </tr> */}

                        {/* TODO: Remove trailing commas */}
                        <tr>
                            <td>
                                <b>Songs: </b>

                                {eval(artist.tracks).map(
                                    (track) => `${track}, `
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <b>Albums: </b>
                                {eval(artist.albums).map((album) => (
                                    <>
                                        <Link to={`/album/${album}`} className='mx-1'>{`${album}`}</Link>,
                                    </>
                                ))}
                            </td>
                        </tr>

                        {/* <tr>
                            <td>
                                <b>Genres: </b>
                                {artist.genres.map((genre) => (
                                    <Link
                                        to={`/genre/${genre}`}
                                        style={{ marginRight: 10 }}
                                    >
                                        {genre}
                                    </Link>
                                ))}
                            </td>
                        </tr> */}

                        {/* <tr>
                            <td>
                                <b>Recommended & Related Artists</b> <br />
                                {eval(artist.related_artists).map(
                                    (relatedArtist) => (
                                        <Link
                                            to={`/artist/${relatedArtist}`}
                                            style={{ marginRight: 10 }}
                                        >
                                            {relatedArtist}
                                        </Link>
                                    )
                                )}
                            </td>
                        </tr> */}
                    </table>
                </div>
                {/* </div> */}
            </>
        );
    });

    if (!artistData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* {artistData} */}
            {/* <pre>{JSON.stringify(artistData, null, 2)}</pre> */}
            <h1 style={{ textAlign: "center" }}>My Artists</h1>
            {/* TODO: Maybe change to only even map if there's something there?  Will we always have somethign when the DB is populated? */}
            <section className="row">
                {/* <div className="row d-flex row-cols-1 row-cols-md-2 row-cols-lg-3 g-lg-5 mb-5"> */}
                {/* TODO: Make the CSS for rendering these work better */}
                {/* {artistsMap ? artistsMap : <p>No Artists exist</p>} */}
                {artistsMap}
                {/* </div> */}
            </section>
            <Pagination pageNum={pageNum} arrayLength={artistData.length} />
        </>
    );
}
