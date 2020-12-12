import marked from 'marked';
import $ from 'mdui.jq';
export default async()=>{
    if (document.getElementById("head")) {
        $('#head').html(marked($('#head-md').html()));
    }
    if (document.getElementById("readme")) {
        $('#readme').html(marked($('#readme-md').html()));
    }
};