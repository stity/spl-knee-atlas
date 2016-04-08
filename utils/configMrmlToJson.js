module.exports = {
    mrmlFileLocation : "../../KneeAtlas-2015Sept-Slicer4-4Version.mrml",
    colorTableFileLocation : "../../Data/knee.ctbl",
    vtkFilesDirectory : "../../Data/",
    jsonResultFileName : "../atlasStructure.json",
    header : {
        "@type": "header",
        "species": "human",
        "organ": "knee",
        "name" : "The SPL/NAC Knee Atlas",
        "license" : "?",
        "citation" : "?",
        "version" : "1",
        "contact" : "https://github.com/stity/spl-knee-atlas",
        "comment" : "",
        "coordinate_system" : "self defined",
        "roots" : []
    },
    labelMapFiles : [{ // can be a list of objects or just a name (if there is only one labelmap)
        name : "../../Data/seg.nrrd",
        includes : "*" // a list of label exception [1,23,854, ...] or just "*" which mean that this the default file to look in which means that there can only be only one file with "*" as includes value
    }],
    "backgroundImages" : ["../../Data/I.nrrd"] //can be a name or a list of names

}
