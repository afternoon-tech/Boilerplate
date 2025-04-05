import {
    AppShell,
    Button,
    createTheme,
    CSSVariablesResolver,
    Input,
    InputWrapper,
    Modal,
    rem,
    Table,
    Tabs,
    DefaultMantineColor,
    MantineColorsTuple,
    colorsTuple,
} from '@mantine/core';
import themeClasses from './Theme.module.css';

const colors: Partial<Record<DefaultMantineColor, MantineColorsTuple>> = {
    gray: [
        '#F9F9F9', // 25 / 0
        '#F2F2F2', // 50 / 1
        '#E5E5E5', // 100 / 2
        '#CCCCCC', // 200 / 3
        '#B2B2B2', // 300 / 4
        '#999999', // 400 / 5
        '#808080', // 500 / 6
        '#666666', // 600 / 7
        '#4D4D4D', // 700 / 8
        '#333333', // 800 / 9
        '#1A1A1A', // 900 / 10
    ],
    brand: [
        '#FFF4EE',
        '#FFE4D2',
        '#FFCFB0',
        '#FFB482',
        '#FFA060',
        '#FF8E42',
        '#FF771C',
        '#D96518',
        '#C85D15',
        '#994711',
        '#66300B',
    ],
    error: [
        '#FFFBFA',
        '#FEF3F2',
        '#FEE4E2',
        '#FECDCA',
        '#FDA29B',
        '#F97066',
        '#F04438',
        '#D92D20',
        '#BE2318',
        '#912018',
        '#7A271A',
    ],
    warning: [
        '#FFFCF5',
        '#FFFAEB',
        '#FEF0C7',
        '#FEDF89',
        '#FEC84B',
        '#FDB022',
        '#F79009',
        '#DC6803',
        '#B54708',
        '#93370D',
        '#7A2E0E',
    ],
    success: [
        '#F6FEF9',
        '#ECFDF3',
        '#D1FADF',
        '#A6F4C5',
        '#6CE9A6',
        '#32D583',
        '#12B76A',
        '#039855',
        '#027A48',
        '#05603A',
        '#054F31',
    ],
    blueGray: [
        '#F8F9FC',
        '#F1F5F9',
        '#E2E8F0',
        '#CBD5E1',
        '#94A3B8',
        '#64748B',
        '#475569',
        '#334155',
        '#1E293B',
        '#0F172A',
        '#020617',
    ],
    blueLight: [
        '#F0F9FF',
        '#E0F2FE',
        '#BAE6FD',
        '#7DD3FC',
        '#38BDF8',
        '#0EA5E9',
        '#0284C7',
        '#0369A1',
        '#075985',
        '#0C4A6E',
        '#082F49',
    ],
    blue: [
        '#EFF6FF',
        '#DBEAFE',
        '#BFDBFE',
        '#93C5FD',
        '#60A5FA',
        '#3B82F6',
        '#2563EB',
        '#1D4ED8',
        '#1E40AF',
        '#1E3A8A',
        '#172554',
    ],
    indigo: [
        '#EEF2FF',
        '#E0E7FF',
        '#C7D2FE',
        '#A5B4FC',
        '#818CF8',
        '#6366F1',
        '#4F46E5',
        '#4338CA',
        '#3730A3',
        '#312E81',
        '#1E1B4B',
    ],
    purple: [
        '#FAF5FF',
        '#F3E8FF',
        '#E9D5FF',
        '#D8B4FE',
        '#C084FC',
        '#A855F7',
        '#9333EA',
        '#7E22CE',
        '#6B21A8',
        '#581C87',
        '#3B0764',
    ],
    pink: [
        '#FDF2F8',
        '#FCE7F3',
        '#FBCFE8',
        '#F9A8D4',
        '#F472B6',
        '#EC4899',
        '#DB2777',
        '#BE185D',
        '#9D174D',
        '#831843',
        '#500724',
    ],
    rose: [
        '#FFF1F2',
        '#FFE4E6',
        '#FECDD3',
        '#FDA4AF',
        '#FB7185',
        '#F43F5E',
        '#E11D48',
        '#BE123C',
        '#9F1239',
        '#881337',
        '#4C0519',
    ],
    orange: [
        '#FFF7ED',
        '#FFEDD5',
        '#FED7AA',
        '#FDBA74',
        '#FB923C',
        '#F97316',
        '#EA580C',
        '#C2410C',
        '#9A3412',
        '#7C2D12',
        '#431407',
    ],
    contentBackground: colorsTuple('#F6F6F4'),
};

// Backwards compatibility aliases
colors.lightBlue = colors.blueLight;
colors.green = colors.success;

export const theme = createTheme({
    fontFamily: 'Manrope',
    fontSizes: {
        xs: rem(12),
        sm: rem(14),
        md: rem(16),
        lg: rem(18),
        xl: rem(20),
        xxl: rem(24),
    },
    headings: {
        fontWeight: '400',

        sizes: {
            h1: { fontSize: rem(72) },
            h2: { fontSize: rem(60) },
            h3: { fontSize: rem(48) },
            h4: { fontSize: rem(36) },
            h5: { fontSize: rem(30) },
            h6: { fontSize: rem(24) },
        },
    },
    primaryColor: 'brand',
    colors,
    spacing: {
        xxxs: rem(4),
        xxs: rem(8),
        xs: rem(12),
        sm: rem(16),
        md: rem(20),
        lg: rem(24),
        xl: rem(28),
        xxl: rem(32),
        xxxl: rem(40),
        xxxxl: rem(64),
    },
    components: {
        Modal: Modal.extend({
            classNames: {
                title: themeClasses.modalTitle,
            },
        }),
        Button: Button.extend({
            classNames: {
                root: themeClasses.buttonRoot,
            },
        }),
        InputWrapper: InputWrapper.extend({
            classNames: {
                label: themeClasses.inputLabel,
            },
        }),
        Input: Input.extend({
            classNames: {
                wrapper: themeClasses.inputWrapper,
                input: themeClasses.input,
            },
        }),
        AppShell: AppShell.extend({
            styles: {
                aside: {
                    boxShadow:
                        '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                },
            },
        }),
        Tabs: Tabs.extend({
            classNames: {
                tab: themeClasses.tab,
            },
        }),
        Table: Table.extend({
            classNames: {
                thead: themeClasses.thead,
                th: themeClasses.th,
            },
        }),
    },
});

export const cssVariableResolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--mantine-spacing-xxxs': theme.spacing.xxxs,
        '--mantine-spacing-xxs': theme.spacing.xxs,
        '--mantine-spacing-xxl': theme.spacing.xxl,
        '--mantine-spacing-xxxl': theme.spacing.xxxl,
    },
    light: {},
    dark: {},
});
