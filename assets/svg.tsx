import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  G,
  Path,
  Defs,
  Circle,
  ClipPath,
  Mask,
} from "react-native-svg";

export const BackIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={39} height={39} x={0.5} y={0.5} stroke="#E5E7EB" rx={11.5} />
    <G clipPath="url(#a)">
      <Path
        stroke="#111827"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m23 14-6 6 6 6"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8 8h24v24H8z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const GoogleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#FBBB00"
        d="m6.047 14.418-.807 3.013-2.95.062A11.539 11.539 0 0 1 .91 12c0-1.922.467-3.734 1.295-5.33l2.626.48 1.15 2.61A6.89 6.89 0 0 0 5.61 12c0 .85.154 1.666.437 2.418Z"
      />
      <Path
        fill="#518EF8"
        d="M23.888 9.834a11.614 11.614 0 0 1-.051 4.585 11.588 11.588 0 0 1-4.08 6.62h-.001l-3.308-.17-.468-2.922a6.908 6.908 0 0 0 2.973-3.527h-6.198V9.834h11.133Z"
      />
      <Path
        fill="#28B446"
        d="M19.755 21.038v.001a11.542 11.542 0 0 1-7.255 2.552 11.59 11.59 0 0 1-10.21-6.098l3.756-3.075a6.892 6.892 0 0 0 9.934 3.53l3.775 3.09Z"
      />
      <Path
        fill="#F14336"
        d="m19.898 3.078-3.755 3.074a6.894 6.894 0 0 0-10.162 3.61L2.207 6.668h-.001A11.589 11.589 0 0 1 12.5.41c2.812 0 5.39 1.002 7.398 2.669Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.91.41H24.09V23.59H.91z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const AppleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M19.35 18.483c-.35.81-.765 1.557-1.246 2.243-.655.936-1.191 1.583-1.604 1.943-.641.59-1.328.892-2.063.91-.528 0-1.164-.15-1.905-.456-.744-.304-1.427-.454-2.051-.454-.656 0-1.358.15-2.11.454-.752.305-1.359.464-1.822.48-.705.03-1.408-.28-2.11-.934-.447-.391-1.007-1.062-1.678-2.011-.72-1.015-1.311-2.19-1.775-3.532-.496-1.448-.745-2.85-.745-4.209 0-1.555.335-2.896 1.007-4.02a5.916 5.916 0 0 1 2.11-2.139 5.67 5.67 0 0 1 2.854-.806c.56 0 1.294.173 2.207.514.91.342 1.494.516 1.75.516.192 0 .841-.203 1.941-.607 1.041-.375 1.92-.53 2.639-.47 1.95.158 3.414.928 4.388 2.314-1.744 1.059-2.606 2.54-2.589 4.442.016 1.48.552 2.713 1.606 3.692a5.28 5.28 0 0 0 1.605 1.054c-.128.374-.264.732-.409 1.076ZM14.88.86c0 1.161-.423 2.245-1.267 3.248-1.019 1.192-2.25 1.881-3.586 1.773a3.623 3.623 0 0 1-.027-.44c0-1.114.484-2.307 1.344-3.282.43-.494.976-.904 1.638-1.232.66-.322 1.286-.5 1.874-.531.017.155.024.31.024.464Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.24.395H19.76v23.21H.24z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ResetIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={91}
    height={77}
    fill="none"
    {...props}
  >
    <Circle cx={36} cy={41} r={36} fill="#F9FAFB" />
    <Circle cx={1} cy={70} r={1} fill="#86EFAC" />
    <Circle cx={69} cy={76} r={1} fill="#FDE047" />
    <Circle cx={13} cy={6} r={1} fill="#E5E7EB" />
    <Path
      fill="#97EDFF"
      fillRule="evenodd"
      d="M31.6 40.219V33.3a7.7 7.7 0 0 1 15.4 0v6.919a7.703 7.703 0 0 1 5.5 7.381v6.6a7.7 7.7 0 0 1-7.7 7.7h-11a7.7 7.7 0 0 1-7.7-7.7v-6.6a7.705 7.705 0 0 1 5.5-7.381Zm3.3-.319v-6.6a4.4 4.4 0 0 1 8.8 0v6.6h-8.8Z"
      clipRule="evenodd"
      opacity={0.8}
    />
    <Path
      fill="#0A6375"
      fillRule="evenodd"
      d="M30.5 46.5a4.4 4.4 0 1 0 8.8 0 4.4 4.4 0 0 0-8.8 0Zm6.6 0a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0A6375"
      fillRule="evenodd"
      d="M40.4 35.5h-11a7.7 7.7 0 0 0-7.7 7.7v6.6a7.7 7.7 0 0 0 7.7 7.7h11a7.7 7.7 0 0 0 7.7-7.7v-6.6a7.7 7.7 0 0 0-7.7-7.7Zm-16.5 7.7a5.5 5.5 0 0 1 5.5-5.5h11a5.5 5.5 0 0 1 5.5 5.5v6.6a5.5 5.5 0 0 1-5.5 5.5h-11a5.5 5.5 0 0 1-5.5-5.5v-6.6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0A6375"
      d="M29.4 36.6a1.1 1.1 0 1 1-2.2 0v-7.7a7.7 7.7 0 0 1 15.4 0v7.7a1.1 1.1 0 1 1-2.2 0v-7.7a5.5 5.5 0 0 0-11 0v7.7Z"
    />
    <Path
      fill="#FFF1EE"
      fillRule="evenodd"
      d="M79.971 23.634c2.074-.17 4.199-.073 6.257.036.443.024.8.368.765.761-.004.399-.375.7-.787.681-1.995-.106-4.054-.208-6.032-.04-.422.037-.82-.256-.88-.653-.06-.398.256-.747.677-.785ZM75.177 15.391c3.706-2.434 7.75-4.416 11.407-6.94.328-.239.828-.17 1.093.15s.22.774-.14 1.007c-3.659 2.533-7.704 4.524-11.411 6.967a.869.869 0 0 1-1.12-.182c-.232-.322-.187-.776.171-1.002ZM71.136 2.912l-1.15 5.068c-.067.39-.492.628-.923.535-.431-.093-.685-.478-.619-.87.385-1.691.768-3.383 1.152-5.075.098-.385.522-.621.953-.526.4.09.684.483.587.868Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFB9AA"
      fillRule="evenodd"
      d="M77.949 22.663c2.09-.172 4.231-.074 6.306.036.447.025.806.371.77.767-.003.402-.377.706-.793.687-2.01-.108-4.086-.21-6.08-.041-.424.038-.825-.258-.886-.658-.06-.4.258-.753.683-.791ZM73.117 14.355c3.735-2.454 7.81-4.451 11.497-6.996.33-.24.834-.17 1.101.152s.221.78-.14 1.015c-3.688 2.553-7.766 4.56-11.502 7.022a.876.876 0 0 1-1.128-.183c-.235-.325-.19-.783.172-1.01ZM69.043 1.777l-1.16 5.108c-.067.393-.494.633-.93.54-.434-.095-.69-.483-.623-.877l1.162-5.116c.098-.388.525-.626.96-.53.403.091.69.487.591.875Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const VerifyIdIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={85}
    height={78}
    fill="none"
    {...props}
  >
    <Circle cx={36} cy={36} r={36} fill="#F9FAFB" />
    <Circle cx={1} cy={65} r={1} fill="#AB92F0" />
    <Circle cx={71.5} cy={5.5} r={1.5} fill="#FDE047" />
    <Circle cx={72.5} cy={7.5} r={1.4} stroke="#111827" strokeWidth={0.2} />
    <Circle cx={1} cy={6} r={1} fill="#E5E7EB" />
    <G fill="#97EDFF" opacity={0.8}>
      <Path
        d="M40 36a7.001 7.001 0 0 0 4.95-11.95A6.998 6.998 0 0 0 33 29a7 7 0 0 0 7 7Z"
        opacity={0.8}
      />
      <Path
        fillRule="evenodd"
        d="M53 49.376C53 42.196 47.18 37 40 37s-13 5.196-13 12.376L27.004 53a2 2 0 0 0 2 2H51a2 2 0 0 0 2-2v-3.626.002Z"
        clipRule="evenodd"
        opacity={0.8}
      />
    </G>
    <Path
      fill="#0A6375"
      fillRule="evenodd"
      d="M31 28a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-7a7.001 7.001 0 0 0-4.95 11.95A6.998 6.998 0 0 0 43 28a7 7 0 0 0-7-7Zm.032 14C29.022 35 23 40.16 23 47l.004 5a1 1 0 0 0 2 0L25 47c0-5.55 4.928-10 11.032-10C42.13 37 47 41.444 47 47v5a1 1 0 0 0 2 0v-5c0-6.834-5.95-12-12.968-12Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFF1EE"
      fillRule="evenodd"
      d="M66.812 67.048c.56 2.462.494 4.826.535 7.317a.871.871 0 0 1-.844.895.87.87 0 0 1-.874-.866c-.039-2.362.042-4.609-.49-6.947a.88.88 0 0 1 .642-1.056.857.857 0 0 1 1.031.657ZM71.882 62.35c3.958 3.792 7.672 8.653 10.25 13.548a.89.89 0 0 1-.348 1.191.85.85 0 0 1-1.164-.357c-2.493-4.732-6.085-9.434-9.913-13.098a.894.894 0 0 1-.04-1.243.845.845 0 0 1 1.215-.041ZM72.945 58.272c3.668-.574 7.43.525 10.74 2.056a.888.888 0 0 1 .43 1.163.853.853 0 0 1-1.137.44c-3.016-1.395-6.433-2.444-9.774-1.921a.862.862 0 0 1-.979-.736.878.878 0 0 1 .72-1.002Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFB9AA"
      fillRule="evenodd"
      d="M65.812 64.048c.56 2.462.494 4.826.535 7.317a.871.871 0 0 1-.844.895.87.87 0 0 1-.874-.866c-.039-2.362.042-4.609-.49-6.947a.88.88 0 0 1 .642-1.056.857.857 0 0 1 1.031.657ZM70.882 59.35c3.958 3.792 7.672 8.653 10.25 13.548a.89.89 0 0 1-.348 1.191.85.85 0 0 1-1.164-.357c-2.493-4.732-6.085-9.434-9.913-13.098a.894.894 0 0 1-.04-1.243.845.845 0 0 1 1.215-.041ZM71.945 55.272c3.668-.574 7.43.525 10.74 2.056a.888.888 0 0 1 .43 1.163.853.853 0 0 1-1.137.44c-3.016-1.395-6.433-2.444-9.774-1.921a.862.862 0 0 1-.979-.736.878.878 0 0 1 .72-1.002Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const CheckBoxIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={10} fill="#0A6375" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.597 10 2.43 2.43 4.862-4.86"
    />
  </Svg>
);

export const CancelPadIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <G
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M23.5 7a1.167 1.167 0 0 1 1.166 1.167v11.666A1.167 1.167 0 0 1 23.5 21H10.666l-5.833-5.833a1.75 1.75 0 0 1 0-2.334L10.666 7H23.5ZM18.833 11.667l-4.666 4.666m0-4.666 4.666 4.666-4.666-4.666Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.167 0h28v28h-28z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const USIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 14.667v2h32v-2H0ZM0 18.333v2h32v-2H0ZM0 7.333v2h32v-2H0ZM0 22v2h32v-2H0ZM0 11v2h32v-2H0ZM0 0v2h32V0H0ZM0 3.667v2h32v-2H0Z"
        clipRule="evenodd"
      />
      <Path fill="#2E42A5" d="M0 0h20v13H0z" />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="m1.722 2.939-.726.509.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm4 0-.726.509.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm3.274.509.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51ZM.996 7.449l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74H.597l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51ZM.996 11.449l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74H.597l.644.574-.245.905Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.905-.702-.508Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.905Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.905-.702-.508Zm3.274-7.49.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.843l.645.574-.245.906Zm.726 3.49-.726.51.245-.906-.645-.574h.843l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm-.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.843l.645.574-.245.905ZM3.722 4.938l-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm-8.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.906Zm4.726-4.51-.726.51.245-.906-.644-.574h.842l.282-.74.331.74h.718l-.564.574.218.906-.702-.51Zm-.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.842l.644.574-.245.906Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);

export const UKIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0Z"
        clipRule="evenodd"
      />
      <Mask
        id="b"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24h32V0H0Z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#b)">
        <Mask
          id="c"
          width={32}
          height={24}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <Path fill="#fff" d="M0 0h32v24H0z" />
        </Mask>
        <G mask="url(#c)">
          <Path
            fill="#fff"
            d="m-3.563 22.285 7.042 2.979 28.68-22.026 3.715-4.426-7.53-.995-11.698 9.491-9.416 6.396-10.793 8.581Z"
          />
          <Path
            fill="#F50100"
            d="M-2.6 24.372.989 26.1 34.54-1.599h-5.037l-32.102 25.97Z"
          />
          <Path
            fill="#fff"
            d="m35.563 22.285-7.042 2.979L-.159 3.238l-3.715-4.426 7.53-.995 11.698 9.491 9.416 6.396 10.793 8.581Z"
          />
          <Path
            fill="#F50100"
            d="m35.323 23.783-3.588 1.728-14.286-11.86-4.236-1.324-17.445-13.5H.806l17.434 13.18 4.631 1.588 12.452 10.188Z"
          />
          <Mask id="d" fill="#fff">
            <Path
              fillRule="evenodd"
              d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25V-2Z"
              clipRule="evenodd"
            />
          </Mask>
          <Path
            fill="#F50100"
            fillRule="evenodd"
            d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25V-2Z"
            clipRule="evenodd"
          />
          <Path
            fill="#fff"
            d="M12.222-2v-2h-2v2h2Zm7.556 0h2v-2h-2v2ZM12.222 8v2h2V8h-2ZM-1.972 8V6h-2v2h2Zm0 8h-2v2h2v-2Zm14.194 0h2v-2h-2v2Zm0 10h-2v2h2v-2Zm7.556 0v2h2v-2h-2Zm0-10v-2h-2v2h2Zm14.25 0v2h2v-2h-2Zm0-8h2V6h-2v2Zm-14.25 0h-2v2h2V8Zm-7.556-8h7.556v-4h-7.556v4Zm2 8V-2h-4V8h4Zm-16.194 2h14.194V6H-1.972v4Zm2 6V8h-4v8h4Zm12.194-2H-1.972v4h14.194v-4Zm2 12V16h-4v10h4Zm5.556-2h-7.556v4h7.556v-4Zm-2-8v10h4V16h-4Zm16.25-2h-14.25v4h14.25v-4Zm-2-6v8h4V8h-4Zm-12.25 2h14.25V6h-14.25v4Zm-2-12V8h4V-2h-4Z"
            mask="url(#d)"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const SingaporeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0Z"
        clipRule="evenodd"
      />
      <Mask
        id="b"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24h32V0H0Z"
          clipRule="evenodd"
        />
      </Mask>
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#b)">
        <Path fill="#E31D1C" d="M0 0v12h32V0H0Z" />
        <Path
          fill="#F1F9FF"
          d="M8.868 10.59S6.043 9.453 6.043 6.374s2.825-4.179 2.825-4.179c-1.373-.347-5.017-.037-5.017 4.18 0 4.215 3.589 5.01 5.017 4.215Zm.724-.51.811-.489.829.49-.203-.955.673-.754h-.912l-.387-.891-.387.891-.914.039.675.715-.185.955Zm3.757-.543-.81.489.185-.955-.675-.715.914-.038.386-.892.387.892h.912l-.673.753.203.955-.829-.49ZM11.287 5.77l.81-.49.83.49-.204-.955.674-.753h-.912l-.387-.892-.387.892-.914.038.675.715-.185.955ZM9.37 7.223l-.81.49.184-.956-.675-.715.914-.038.387-.892.387.892h.912l-.673.753.202.955-.828-.49Zm4.548.445.81-.49.829.49-.203-.955.673-.753h-.912l-.387-.892-.386.892-.915.039.675.714-.184.955Z"
        />
      </G>
    </G>
  </Svg>
);

export const ChinaIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
      <Path fill="#E31D1C" d="M0 0h32v24H0V0Z" />
      <Path
        fill="#FECA00"
        d="m15.016 4.548-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61ZM7.018 9.607l-2.881 1.551.657-3.026-2.4-2.265 3.25-.123 1.374-2.826 1.374 2.826h3.243L9.24 8.132l.72 3.026-2.943-1.55ZM17.016 8.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61ZM16.016 12.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61ZM13.016 15.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61Z"
      />
    </G>
  </Svg>
);

export const NetherlandIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0Z"
        clipRule="evenodd"
      />
      <Mask
        id="b"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24h32V0H0Z"
          clipRule="evenodd"
        />
      </Mask>
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#b)">
        <Path fill="#E31D1C" d="M0 0v8h32V0H0Z" />
        <Path fill="#3D58DB" d="M0 16v8h32v-8H0Z" />
      </G>
    </G>
  </Svg>
);

export const IndonesiaIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0Z"
        clipRule="evenodd"
      />
      <Mask
        id="b"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24h32V0H0Z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 0v12h32V0H0Z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
