import { createContext } from 'react';
import type { PagesContext as PagesContextProps } from 'src/types/pages';

const PagesContext = createContext<PagesContextProps | null>(null);

export default PagesContext;
