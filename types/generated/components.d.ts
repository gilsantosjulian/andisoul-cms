import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCategories extends Struct.ComponentSchema {
  collectionName: 'components_sections_categories';
  info: {
    displayName: 'Categories';
  };
  attributes: {
    headline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Shop by Category'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    subheadline: Schema.Attribute.String;
    titleAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    viewAllCta: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
  };
}

export interface SectionsContentCreativePanel extends Struct.ComponentSchema {
  collectionName: 'components_sections_content_creative_panels';
  info: {
    displayName: 'Content Creative Panel';
  };
  attributes: {
    creative_content_panel: Schema.Attribute.Relation<
      'oneToOne',
      'api::creative-content-panel.creative-content-panel'
    >;
    entryTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeaturedProducts extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_products';
  info: {
    displayName: 'Featured Products';
  };
  attributes: {
    entryTitle: Schema.Attribute.String & Schema.Attribute.Required;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    viewAllText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View all products'>;
    viewAllUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/store'>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    autoplayDelay: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10000;
          min: 1000;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5000>;
    entryTitle: Schema.Attribute.String & Schema.Attribute.Required;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showNavigation: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showPagination: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slides: Schema.Attribute.Relation<
      'oneToMany',
      'api::hero-slide.hero-slide'
    >;
  };
}

export interface SectionsPromo extends Struct.ComponentSchema {
  collectionName: 'components_sections_promos';
  info: {
    displayName: 'Promo';
  };
  attributes: {
    entryTitle: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Relation<
      'oneToOne',
      'api::media-asset.media-asset'
    >;
    overlayColor: Schema.Attribute.Enumeration<['black', 'white']> &
      Schema.Attribute.DefaultTo<'black'>;
    overlayEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    overlayOpacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.3>;
    subheadline: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.categories': SectionsCategories;
      'sections.content-creative-panel': SectionsContentCreativePanel;
      'sections.featured-products': SectionsFeaturedProducts;
      'sections.hero-section': SectionsHeroSection;
      'sections.promo': SectionsPromo;
    }
  }
}
