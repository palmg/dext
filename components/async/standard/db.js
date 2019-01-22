import {net} from '../../../lib/util/net'


export async function loadTvList(q) {
    return net(`https://api.tvmaze.com/search/shows?q=${q}`);
};