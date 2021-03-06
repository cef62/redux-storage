import { load as actionLoad } from './actions';

export default function(engine) {
    return (store) => {
        const dispatchLoad = (state) => store.dispatch(actionLoad(state));
        engine.load().then(dispatchLoad);
    };
}
