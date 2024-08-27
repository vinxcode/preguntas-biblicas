import React from 'react'
import ContentLoader from 'react-content-loader'

const ImageGrid = props => (
    <ContentLoader
        width={940}
        height={575}
        viewBox="0 0 940 575"
        backgroundColor="#d3d3d3"
        foregroundColor="#b60968"
        {...props}
    >

        <rect x="12" y="58" rx="2" ry="2" width="300" height="160" />
        <rect x="324" y="58" rx="2" ry="2" width="300" height="160" />
        <rect x="636" y="58" rx="2" ry="2" width="300" height="160" />
        <rect x="12" y="233" rx="2" ry="2" width="300" height="160" />
        <rect x="324" y="233" rx="2" ry="2" width="300" height="160" />
        <rect x="636" y="233" rx="2" ry="2" width="300" height="160" />

    </ContentLoader>
)

ImageGrid.metadata = {
    name: 'Hassan Tijani.A',
    github: 'surepeps',
    description: 'Image Grid with Pagination',
    filename: 'ImageGrid',
}

export default ImageGrid