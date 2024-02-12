import { ValuesOf } from '@type/utility';
import React from 'react';

type Sprites = {
    logo: 'logo-long' | 'logo-short';
    icons: 'exit';
};

type SpritesUnion = {
    [Property in keyof Sprites]: { file: Property; id: Sprites[Property] };
};

type Props = ValuesOf<SpritesUnion> & {
    className?: string;
};

export const Icon: React.FC<Props> = ({ file, id, className = '' }) => {
    return (
        <svg className={className}>
            <use xlinkHref={`/svg/${file}.svg#${id}`} />
        </svg>
    );
};
