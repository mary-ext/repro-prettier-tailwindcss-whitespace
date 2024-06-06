const isMobile = false;
const standalone = false;

let jsx: any;

jsx = <div class={'h-full w-full overflow-hidden' + (!isMobile ? 'bg-black/90' : '')}></div>;
jsx = <div class={'object-cover' + (standalone ? 'aspect-square w-full' : 'min-h-0 grow basis-0')}></div>;
