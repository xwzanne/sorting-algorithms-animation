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

function getSortCmdId(idL, idR){
    return 'sort-cmd-' + idL.toString() + "-" + idR.toString();
}

function getSortingTextId(idL, idR){
    return 'sorting-text-' + idL.toString() + "-" + idR.toString();
}

function getSortingArrowLineLeftId(idL, idR){
    return 'sorting-arrow-line-left-' + idL.toString() + "-" + idR.toString();
}

function getSortingArrowLineRightId(idL, idR){
    return 'sorting-arrow-line-right-' + idL.toString() + "-" + idR.toString();
}

function getMergeCmdId(id){
    return 'merge-cmd-' + id;
}

function removeAnimeTarget(anim){
    anim.animatables.forEach(function(value, index){
        value.target.remove();
    });
}

function getRemoveAnimation(targets){
    return {
        targets:targets,
        opacity: 0,
        duration: 100,
        complete: removeAnimeTarget
    }
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