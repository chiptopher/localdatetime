/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO(props: SEOProps) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );

    const metaDescription = props.description || site.siteMetadata.description;

    const siteTitle = site.siteMetadata.title;

    return (
        <Helmet
            title={siteTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: siteTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(props.meta)}
        >
            <html lang={props.lang} />
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

interface SEOProps {
    description?: string;
    lang?: string;
    meta?: MetaWithProperty[] | MetaWithName[];
    title: string;
}

interface MetaWithProperty {
    property: string;
    content: string;
}

interface MetaWithName {
    name: string;
    content: string;
}

export default SEO;
