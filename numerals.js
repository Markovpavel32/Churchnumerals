const Zero = ( ) => x => x;
const Succ = n => s => z => s(n(s)(z)); 

export {Zero , Succ};
