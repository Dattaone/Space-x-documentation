export const getTextTranslateSpanish = async (text: string) => {

    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${text}`);
    const data = await res.json();
    
    return data[0][0][0];
}
