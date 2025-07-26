export const parseProductTitle = (title) => {
    if (!title || typeof title != 'string'){
        return {header: "", subHeader: ""};
    } 

    const [header, subHeader = ""] = title.split(' - ');
    return {
        header: header?.trim() || '',
        subHeader: subHeader?.trim() || '',
    }; 
};