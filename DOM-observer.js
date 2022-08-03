const targetNode = document.getElementById('vanilla');

const config = { childList: true, subtree: true };

const callback = (mutationsList, observer) => {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
           console.log(`${Date.now() - globalThis.counter} ms`);
           globalThis.counter=0;
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

export default observer;