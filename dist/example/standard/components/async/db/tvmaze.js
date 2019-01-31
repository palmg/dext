import {fetch} from 'dossr/net'


export async function loadTvListContext({query}) {
    return loadTvList(query.q)
}

export async function loadTvList(q) {
    const shows = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
    return {shows}
};