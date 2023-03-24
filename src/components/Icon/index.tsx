import * as React from 'react';

export const SVG_DEF = {
	size: 24,
	color: '#FFFFFF',
} as const;

export interface SvgProps {
	size?: number;
	color?: string;
	style?: React.CSSProperties;
	className?: string;
	title?: string;
}

export const Svg = ({
	style,
	children,
	viewBox,
	size = SVG_DEF.size,
	color = SVG_DEF.color,
	className,
}: SvgProps & { children: React.ReactNode; viewBox: string }) => (
	<svg
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		fill={color}
		style={{ width: size, height: size, minWidth: size, ...style }}
	>
		{children}
	</svg>
);

const Markdown = (props: SvgProps) => (
	<Svg viewBox="0 0 16 16" {...props}>
		<path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
		<path
			fillRule="evenodd"
			d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z"
		/>
		<path fillRule="evenodd" d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z" />
		<path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
	</Svg>
);

const Chevron = (props: SvgProps) => (
	<Svg viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
		></path>
	</Svg>
);
const ChevronDown = (p: SvgProps) => <Chevron {...p} style={{ ...p.style }} />;
const ChevronUp = (p: SvgProps) => (
	<Chevron {...p} style={{ ...p.style, transform: `${p.style?.transform ?? ''}rotate(180deg)` }} />
);
const ChevronLeft = (p: SvgProps) => (
	<Chevron {...p} style={{ ...p.style, transform: `${p.style?.transform ?? ''}rotate(90deg)` }} />
);
const ChevronRight = (p: SvgProps) => (
	<Chevron {...p} style={{ ...p.style, transform: `${p.style?.transform ?? ''}rotate(-90deg)` }} />
);

const Dots = ({ color = SVG_DEF.color, ...props }: SvgProps) => (
	<Svg viewBox="0 0 24 24" color="none" {...props}>
		<path
			fill={color}
			d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
		/>
		<path
			fill={color}
			d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
		/>
		<path
			fill={color}
			d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
		/>
	</Svg>
);

const Copy = ({ color = SVG_DEF.color, ...props }: SvgProps) => (
	<Svg viewBox="0 0 20 20" color="none" {...props}>
		<path
			fill={color}
			fillRule="evenodd"
			d="M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 2 0 012-2h5zM8 8h9v9H8V8z"
		/>
	</Svg>
);

const Check = ({ ...props }: SvgProps) => (
	<Svg viewBox="0 0 32 32" {...props}>
		<path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
	</Svg>
);

export const Icon = {
	Markdown,
	ChevronDown,
	ChevronUp,
	ChevronLeft,
	ChevronRight,
	Dots,
	Copy,
	Check,
} as const;
