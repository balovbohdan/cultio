import {routes} from '@routes';

const locations = Object.freeze(routes.map(route => route.meta.path));

export const validateLocation = (location:string) => {
    const isValid = locations.includes(location);

    if (isValid)
        return location;

    throw new Error(`Got invalid location: ${location}.`);
};

export const getLocations = () => location;