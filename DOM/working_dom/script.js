const quanSelect = document.querySelector('.quantity__selector');
const colorSelect = document.querySelector('.color__selector');
const blocks = document.querySelector('.blocks');

quanSelect.addEventListener('change', function(event) {
    const quantity = event.target.value;
    let markup = "";
    for (let i = 0; i < quantity; i++) {
        const block = document.createElement('div');
        block.className = 'item';
        block.innerText = i + 1;

        markup += block.outerHTML;
    };

    blocks.innerHTML = markup;
});

const colorBloc = (block, color) => {
    block.style.backgroundColor = color;
};

let changed = 'false';

colorSelect.addEventListener('change', function(event) {
    const color = event.target.value;
    const item = blocks.querySelectorAll('.item');

    changed = !changed;
    console.log(changed);

    for (let i = 0; i < item.length; i++) {
        const currentBlock = item[i];
        const blockNumber = i + 1;

        if (changed) {
            if (blockNumber % 2 !== 0) {
                colorBloc(currentBlock, color);
            } else {
                colorBloc(currentBlock, '#fff');
            };
        } else {
                if (blockNumber % 2 == 0) {
                    colorBloc(currentBlock, color);
                } else {
                    colorBloc(currentBlock, '#fff');
                };
            };
        // item.style.backgroundColor = color;
        };
});
