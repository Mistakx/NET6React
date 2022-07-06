
// Radio search by name result
export interface RadioSearchByNameResult {
    took: number;
    hits: Hits;
    query: string;
    version: string;
    apiVersion: number;
}

interface Source {
    code: string;
    subtitle: string;
    type: string;
    title: string;
    url: string;
}

interface Hit {
    _id: string;
    _score: number;
    _source: Source;
}

interface Hits {
    hits: Hit[];
}

// Radio search by id result
export interface RadioSearchByIdResult {
    apiVersion: number;
    version: string;
    data: Data;
}

interface Place {
    id: string;
    title: string;
}

interface Country {
    id: string;
    title: string;
}

interface Data {
    type: string;
    title: string;
    id: string;
    url: string;
    website: string;
    secure: boolean;
    place: Place;
    country: Country;
}





