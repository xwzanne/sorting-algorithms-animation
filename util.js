function getSVGElement(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;
}

function getRectId(id){
    return 'number-rect-' + id.toString();
}

function getDivideLineId(id){
    return 'divide-line-' + id.toString();
}

function getSortTextId(idL, idR){
    return 'sort-text-' + idL.toString() + "-" + idR.toString();
}
/**
 * NumberBoxToSort class.
 *
 * @constructor
 * @param {Number} idx - The original index in the array.
 * @param {String} svgNode - Dom node to represent the number box to sort. Should be a <g> node.
 * @param {Number} value  - Value in this node.
 */
class NumberBoxToSort {
    constructor(idx, svgNode, value) {
        this.idx = parseInt(idx);
        this.svgNode = svgNode;
        this.value = value;
    }
}