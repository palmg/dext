import net from '../../../src/net'


export async function loadTvListContext(router, req, res) {
    return loadTvList(router.query.q)
}

export async function loadTvList(q) {
    const shows = await net(`https://api.tvmaze.com/search/shows?q=${q}`);
    return {shows}
};