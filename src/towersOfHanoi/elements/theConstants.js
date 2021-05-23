const num_tiles = 3;
const tower_width = `${30 * num_tiles}px`;
const header_height = "0rem";
const footer_height = "0rem";
const hanoi_height = `(100vh - ${header_height} - ${footer_height})`;
const tower_height = `(${tower_width} * ${num_tiles}) * 1.3`;
const tile_height = `(${tower_height} / 12)`;

const getWidth = () => {
    switch (num_tiles) {
        case 1:
            return 13;
        case 2:
            return 10.5;
        case 3:
            return 8;
        default:
            return 3;
    }
};

const tile_width_base = getWidth();

export default {
    tower_width,
    header_height,
    footer_height,
    hanoi_height,
    tower_height,
    tile_height,
    tile_width_base,
    num_tiles
};