import { buildConfig, type PayloadRequest } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import path from 'path';

const isAdmin = ({ req }: { req: PayloadRequest }) =>
  req.user !== null &&
  Array.isArray(req.user.roles) &&
  req.user.roles.includes('admin');

const publicReadPublished = ({ req, data }: { req: PayloadRequest; data?: unknown }) => {
  if (req.user !== null) return true;
  if (data) return (data as { status?: string }).status === 'published';
  return { status: { equals: 'published' } };
};

const adminOnly = ({ req }: { req: PayloadRequest }) =>
  req.user !== null && isAdmin({ req });

const usersOwn = ({ req, id }: { req: PayloadRequest; id?: number | string }) => {
  if (req.user === null) return false;
  if (isAdmin({ req })) return true;
  return req.user.id === id;
};

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
        defaultColumns: ['email', 'name', 'roles'],
      },
      access: {
        admin: ({ req }) => req.user !== null,
        create: adminOnly,
        read: usersOwn,
        update: usersOwn,
        delete: adminOnly,
      },
      fields: [
        {
          name: 'email',
          type: 'email',
          unique: true,
          required: true,
        },
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'roles',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Editor', value: 'editor' },
          ],
          defaultValue: ['editor'],
          required: true,
          saveToJWT: true,
        },
      ],
      timestamps: true,
    },
    {
      slug: 'services',
      access: {
        admin: adminOnly,
        create: adminOnly,
        read: publicReadPublished,
        update: adminOnly,
        delete: adminOnly,
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'status', 'order'],
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'Slug is required';
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return 'Slug must be lowercase alphanumeric with hyphens';
            return true;
          },
        },
        { name: 'title', type: 'text', required: true },
        { name: 'excerpt', type: 'textarea' },
        { name: 'content', type: 'richText' },
        { name: 'icon', type: 'text' },
        { name: 'imageUrl', type: 'text' },
        { name: 'order', type: 'number' },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          required: true,
        },
      ],
      timestamps: true,
    },
    {
      slug: 'portfolio',
      access: {
        admin: adminOnly,
        create: adminOnly,
        read: publicReadPublished,
        update: adminOnly,
        delete: adminOnly,
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status'],
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'Slug is required';
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return 'Slug must be lowercase alphanumeric with hyphens';
            return true;
          },
        },
        { name: 'title', type: 'text', required: true },
        { name: 'excerpt', type: 'textarea' },
        { name: 'content', type: 'richText' },
        { name: 'category', type: 'text' },
        { name: 'imageUrl', type: 'text' },
        { name: 'featuredImageUrl', type: 'text' },
        { name: 'order', type: 'number' },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          required: true,
        },
      ],
      timestamps: true,
    },
    {
      slug: 'blogs',
      access: {
        admin: adminOnly,
        create: adminOnly,
        read: publicReadPublished,
        update: adminOnly,
        delete: adminOnly,
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'status', 'publishedAt'],
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'Slug is required';
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return 'Slug must be lowercase alphanumeric with hyphens';
            return true;
          },
        },
        { name: 'title', type: 'text', required: true },
        { name: 'excerpt', type: 'textarea' },
        { name: 'content', type: 'richText' },
        { name: 'author', type: 'text' },
        { name: 'authorImageUrl', type: 'text' },
        { name: 'coverImageUrl', type: 'text' },
        { name: 'publishedAt', type: 'date' },
        { name: 'category', type: 'text' },
        { name: 'tags', type: 'text', hasMany: true },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          required: true,
        },
      ],
      timestamps: true,
    },
    {
      slug: 'gallery',
      access: {
        admin: adminOnly,
        create: adminOnly,
        read: publicReadPublished,
        update: adminOnly,
        delete: adminOnly,
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status'],
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'Slug is required';
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return 'Slug must be lowercase alphanumeric with hyphens';
            return true;
          },
        },
        { name: 'title', type: 'text', required: true },
        { name: 'imageUrl', type: 'text' },
        { name: 'caption', type: 'text' },
        { name: 'category', type: 'text' },
        { name: 'order', type: 'number' },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          required: true,
        },
      ],
      timestamps: true,
    },
    {
      slug: 'testimonials',
      access: {
        admin: adminOnly,
        create: adminOnly,
        read: publicReadPublished,
        update: adminOnly,
        delete: adminOnly,
      },
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'company', 'status', 'rating'],
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'Slug is required';
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return 'Slug must be lowercase alphanumeric with hyphens';
            return true;
          },
        },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'company', type: 'text' },
        { name: 'imageUrl', type: 'text' },
        { name: 'rating', type: 'number', min: 1, max: 5 },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          required: true,
        },
      ],
      timestamps: true,
    },
    {
      slug: 'team',
      access: {
        admin: adminOnly,
        create: adminOnly,
        read: publicReadPublished,
        update: adminOnly,
        delete: adminOnly,
      },
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'status', 'order'],
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'Slug is required';
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return 'Slug must be lowercase alphanumeric with hyphens';
            return true;
          },
        },
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'bio', type: 'textarea' },
        { name: 'imageUrl', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'order', type: 'number' },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          required: true,
        },
      ],
      timestamps: true,
    },
  ],
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
