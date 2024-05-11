import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeGames.css';
import { useNavigate } from 'react-router-dom';

const HomeGames = () => {
    const navigate = useNavigate();
    const [yourApps, setYourApps] = useState([]);

    useEffect(() => {
        fetchYourApps();
    }, []);

    const fetchYourApps = async () => {
        try {
            const response = await fetch('https://skcetappthree.onrender.com/api/yourapp');
            const data = await response.json();
            setYourApps(data);
        } catch (error) {
            console.error('Error fetching your apps:', error);
        }
    };

    const GoYourApp = () => {
        navigate('/yourapp');
    };

    const games = [
        { name: 'snakegame/snakegame1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8bZm7Kw54fCifLFsp3XCMeeKkyMYX6Y34r1rpB6XBzMByMOUBppRzqgohg&s' },
        { name: 'ponggame/pong1', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAmAMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAACAcGAgUDAf/EADkQAAECAwUFBQUHBQAAAAAAAAABAgMEBwUGMnGyETY3c3USEyExQhQXUZGUFRZSVWGx0jNWcoHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMPfjdmfcuHBhTN9bDgTEJkWDEnoLXw4jUc1yK5NqKi+aHw343ZnQU738u/1CDrQCqPundv+37J+ih/8OFrVYFiyFP5yYkbIs+WjtiwkSLBlWMcm16bfFE2mpmfV34bz3Og60Al0AAAAAAAAAAAAAAAAAAemY25gMxtzAB+N2Z0FO9/Lv9Qg60OffjdmdBTvfy7/AFCDrQCwTPq78N57nQdaGgmfV34bz3Og60Al0AAAAAAAAAAAAAAAAAAemY25gMxtzAB+N2Z0FO9/Lv8AUIOtDn343ZnQU738u/1CDrQCwTPq78N57nQdaGgmfV34bz3Og60Al0AAAAAAAAAAAAAN4pPTu614blStpWvZqx5uJEiNdE9ois2ojlRPBrkTyMHKioRw3kedG1qB+3uguL+Su+rjfzJwvlIy9mXstiQkofdy0tORYUJnaVey1HKiJtXxUsoj6om/l4OoRtagc+zG3MBmNuYAPxuzOgp3v5d/qEHWhz78bszoKd7+Xf6hB1oBYJn1d+G89zoOtDQTPq78N57nQdaAS6AAAAA7OnlPLSvtHe+E9JSzoLuzFm3t2+P4Wp6l/b5Gr+4S7fs/Z+0rV7/Z/U7cPs7f8ex5f7O0prZ8Czbh2HBlmojXycOM5U9TntR7l+bjpQJPqHTy0rkx2PivSbs6M7swptjdnj+Fyelf3+ZxhX1SrPgWlcO3IMw1FayTiRmqvpcxqvavzaSCAAAAqKhHDeR50bWpLpUVCOG8jzo2tQNBI+qJv5eDqEbWpYJH1RN/LwdQja1A59mNuYDMbcwAfjdmdBTvfy7/AFCDrQ59+N2Z0FO9/Lv9Qg60AsEz6u/Dee50HWhoJn1d+G89zoOtAJdAAAAAUZQ+/UnaNhy13Z+O2FaUm3u4CPXZ38P09n9UTw2fBEX47NXIdRVaqKiqip5Kh9j72Xk9m9m+37V7jZs7v2yJ2dnw2bfIDc64X6k7OsOZu7IR2xbSnG93HRi7e4h+rtfqqeGz4Kq/DbOZ/VVXKqqqqq+aqfwAAABUVCOG8jzo2tSXSoqEcN5HnRtagaCR9UTfy8HUI2tSwSPqib+Xg6hG1qBz7MbcwGY25gA/G7M6Cne/l3+oQdaHPvxuzP2s+dmLNnpeekondTMvESJCfsRey5F2ouxfAC2zPq78N57nQdaGKe9q/X5676WD/A+fbtQb03gs59nWvaqzEpEVFdD7iE3aqLtTxa1F8wOYAAAAAAAAAAAAACoqEcN5HnRtakulRUI4byPOja1A0Ej6om/l4OoRtalgkfVE38vB1CNrUDn2Y25gMxtzAB+N2Z5PT8bszyAAAAAAAAAAAAAAAAAKioRw3kedG1qS6VFQjhvI86NrUDQSPqib+Xg6hG1qWCR9UTfy8HUI2tQOfZjbmAzG3MAH43Znk9PxuzPIAAAAAAAAAAAAAAAAAqKhHDeR50bWpLpUVCOG8jzo2tQNBI+qJv5eDqEbWpYJH1RN/LwdQja1A59mNuYDMbcwB//Z' },
        { name: 'tictactoe/tictactoe1', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAaVBMVEUAAAD///+2trbr6+vw8PD39/f8/Pyvr6/z8/O6urrd3d3o6OhnZ2fi4uJSUlJeXl7BwcGjo6N3d3cfHx8/Pz9xcXGpqakWFhY0NDQoKCiNjY0MDAwaGhrX19fR0dFNTU1/f3+Xl5dGRkbi/ZwaAAAIH0lEQVR4nO1c17aiSBQFFERyFMQrgv//kS1yKkAl71T1wKxxP/TDxcZNnRzQsifcn9a+8AzevKzpn77amg2D5x2xO+6PnGVVPrCLtmbCRTSzy7fmIUA+sYsfW9MQ4BG/2J22ZiHEybaOez06y0qOVrA1BwkCa682MSG30q0pSBBZ160pSNBat60pSNBsTUCKPZ/cF1988cV/Ek1ZXsufrVnw0EZd7mR9n50vY7GzdDJy7r6N4cXZ2G5NCaMIXHsF77iPYqGJwjU1QL79+bWOJyBn20Ft5ju6rB8klyund/i9hEcg5PaCP5ogd55ulQkzrbfsPJ4h1gcZuRcu+unbMAsnK/mX69kcD5z/SFtDeO9PY5ef+4WNnLXZneFOGfdqBL7CZWQbUV4kGxP057a4UIZy0WWXyR4UmyTD7ko49NHy3B8XYiudJrsaiyJj4lCENWtdsjc9Vn4OgQqby1G3/ZUTAa10LzqiK4f10Y1Y4RKLhwwd3123YD0Reou/p/jkwnXF/kSXAj45qzkherp+5Ubo0bqXYs3ymXbCBZ2psNFwQ/rsarLjC5eI9cgEpRv65kJy0xg+pN/HuRB64EFTTI4RK3kaR3bPBGQbCzzpL7AWLhFryLE6OBZXrvFwT3fQZreiR8gdOZqFHLFC4dHxS0/4Q1C61xCd83nxH57kKLBXDAhDdxPJFOVYxK5kAjLHs6qK6GbNc00MJCjHgnDg3rftPzTGJ+iHzLI/x2VFTtAPBy/tq78UAppusOXSEzXrITKH6uILDlk7UwHQwuW5kjeK+XqsHr455oyWvp8tyy6G+QOBOr6DLPST0BkRlYyfRU1dxE7tKC5Gz46EL9kjF7OjiNUDaXA9ZqrbNLYXEDwz+Gq+u1kg+ND1/BNyInowNPeUjqKBGw4myJGUiQiXFw6u/YcCg3rONlB3JyR8Rfx0FAPiZ6ByKWAUBubDRKwvV3IjjoV3QBA/VWeCIh5bTf2aHE6Z3HfmQU7PYQv6Fo65l98TPI++UVA6B2kRJVzW76FyUXp4JUjjoCtYcnLETRDhspabIA2VOWSUMPKbDJ8jwTpHpWKNTPdCIXGMGpWMqhxVAVK3ugv3T+neWrgRuiJMP3BMVCinCgnRuZX3Fwv3B/WGRE6vxg0YvQWsK+55HNZKTjmWtd2R83Z4utfhJ9ZsBeBqh5P+N/iI/LVf6TDxmPl/V9xFsXvNYhZ3FLiGj3SPFRCVqN4jKmqUCZVhf5ADypELxAqA03NZf5/ZFItTFz2qtkqGPKMa3fqLOrPj90WOFYTLsc0rTe/1eHEQBOFidiHM/X+B6ijswk245a9vPHH7044tRazp6QCtIgd/CnP4o5ibpxsj9JFmInKxoSJWC2XNn6iMe9nlTHt/OY9yw3FPc9q2y/r46Hq2609Tlf2thZWPqBi6oU62Hy1+8YVhtHWe3eOgP3epfiPfKKr6tAjiQZfshmGVs17fzYatac0YmRbPzK83k2ho4cnn9s418o3F2wzixY0Xen6G++jyThLrmyIfTYwCmlxK7pUN8SJnMtWEd6Hcy3d1YaCvuJyihE4+jpdsYb0HDonZhkLR6c2lj/6YhwzIbL8nd2vHmBypx5RkFdD3+GEflZq67fYOc3DPqyPq7kS469IPseOWJD9YHJrtdlLUcxaXWqKRTBsPt63Y4qbB5Dy9pmyJNzcybmGc4tMbVlcSfOWwFi5RZM1ZAG448GtCanuC0X/SkVw1CmSdv98BaQ//5CbgSTLjHWpMjxbuD25UeCfNVwBGJBxJvwOZjcdcIWInc58b6aI4mkEGtXbl/UmkmmyFmmKj8ZHuUS1JPW5kSU2uvCXSPPYStYv0DndkPu7pj+5Af3l7EzRO4o/VeM9t0r0fc2Klxh2KHUMkQF7UJLoXttRs3NGvt6NZsMpxXAndEm7fJsUR2SeuxMS8GIYxwkiOAaG458bUmmlEeZz50O8BrjhWfhCsR9CQq9fr0I6Rl8RATdQTBQjGonwoWpI7m3nTCfREHQwr8IuiXJfeUDW2o5CJTXGJFsq1QfQBars3M/UGmzF2N2pL9oM1lc9w+lQUULIJs7XFDtDRUA0HjkL9gi2M5AQLNLfV/tTBzG8TII+itDFIUwLu1za5vUJg5PUUWGjiVVxLINfD9WMMudfzmuiAJuFnZtHeJQpKjegjEtQM+GMUP/lnQlDPH+PFY0qsLydMZcsGhAsSU1VOkMow6+RLctMj4nG7QEd/BZQ8ymPZwxZ+il5lff+hxn8I9b0ySsplE+gSiYs1Hs7OD9E9dsX7t8DxW5wd4/k2k7jTYiUeuMAxV9+xoH6nWItHpErrFOBGGgVn2qyIcJWLUirgxFu06zdixVoHKErnlhcIvYOu7smWFl6eDmsWU/Jg2qwbpEohzfKixX0m78IIoiBNqLWva7D2n1lvWaCLnu67HwlJzcJl0EgyklQy1enDFZOjhKudij5sArcfqmtZltc2yel32XomUWhdrs5hemAx+ovQ0bKo8uJ7sHrLjtcDmh2NcO13dizqcu8DeqIXOQEnnl8tz67tSt70LAJTb1pWdxm5jp//NUn6kGWGVZqaGiWPvoCaJ5hW/Lt4ONzdkvseFjcmpDmjflm3ozF/m14oY+27524GoBhVWndDlOxpo+SLL7744ov/M27W/oIlQWnt7VdSaTwtM2+v/h0U1vZbyWJk1mG/PzLXHCwTb8T/JQyupRy/boZbZlu2t1e7KLzpV3C1fwXk72B6o2j6BeF9/HjUGlP37f3b0HupSmm8J01/AKOMWOf7n5GnAAAAAElFTkSuQmCC' },
        // Add more games with their corresponding image URLs
    ];

    return (
        <div className='maincontainer'>
        <h1>Default Games</h1>
        <div className="container">
            {games.map((game, index) => (
                <Link key={index} to={`/${game.name}`} className={`box box${index + 1}`}>
                    <img src={game.image} alt={`Game ${index + 1}`} className='homegamesimage'/>
                </Link>
            ))}
            </div>
            <hr />
            <button className='yourappbutton' onClick={GoYourApp}>Launch your App</button>
            <hr />
            <div className="container">
                {yourApps.map((yourApp, index) => (
                    <a href={yourApp.appurl} target='_blank' rel="noopener noreferrer">
                        <div key={index} className='box'>
                            <img src={yourApp.appicon} alt={`App Icon ${index}`} className='homegamesimage'/>
                        </div>
                            <p>{yourApp.appname}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HomeGames;
