import React from 'react';

type IconId = {
    logo: 'logo-long' | 'logo-short';
};

type File = keyof IconId;

type Props = {
    file: File;
    id: IconId[File];
    className?: string;
};

export const Icon: React.FC<Props> = ({ file, id, className = '' }) => {
    return (
        <svg className={className}>
            <use xlinkHref={`/svg/${file}.svg#${id}`} />
        </svg>
    );
};
