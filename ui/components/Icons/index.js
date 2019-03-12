import React from 'react'
import { css } from '@emotion/core'
import { colors } from '../../settings'

export const CloseIcon = ({ size = 20, color = colors.midnight, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 21"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    css={`
      ${style}
    `}
  >
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
    >
      <g
        transform="translate(1.000000, 1.000000)"
        stroke={color}
        strokeWidth="2"
      >
        <polyline points="0 18.3333333 9 9.50980392 18 0.68627451" />
        <polyline points="0 0.68627451 9 9.50980392 18 18.3333333" />
      </g>
    </g>
  </svg>
)

const directionToDegree = { left: 0, right: 180 }
export const ArrowIcon = ({
  size = 20,
  color = colors.midnight,
  direction = 'left',
  style
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 444.822 444.822"
    fill={color}
    css={css`
      ${style}
      ${css`
        transform: rotate(${directionToDegree[direction]}deg);
      `}
    `}
  >
    <g>
      <path
        d="M423.265,178.298c-6.19-7.139-14.229-10.707-24.126-10.707H198.148L281.8,83.937c7.234-7.229,10.848-15.891,10.848-25.981
  		c0-10.085-3.613-18.747-10.848-25.979l-21.413-21.129C253.156,3.619,244.59,0,234.693,0c-10.089,0-18.752,3.615-25.981,10.848
  		L22.848,196.428c-7.043,7.423-10.564,16.084-10.564,25.981c0,10.089,3.521,18.654,10.564,25.693l185.864,186.152
  		c7.422,7.043,16.083,10.567,25.981,10.567c10.085,0,18.65-3.524,25.693-10.567l21.413-21.693
  		c7.234-6.851,10.848-15.42,10.848-25.693c0-10.284-3.613-18.853-10.848-25.7l-83.652-83.939h200.991
  		c9.896,0,17.936-3.569,24.126-10.707c6.184-7.139,9.274-15.749,9.274-25.838v-36.545
  		C432.542,194.05,429.448,185.437,423.265,178.298z"
      />
    </g>
  </svg>
)

export const PaperAirplaneIcon = ({
  size = 25,
  color = colors.midnight,
  direction = 'left',
  center,
  style
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    css={css`
      ${style} ${center ? 'margin-left: -3px; margin-bottom: -1px;' : ''}
    `}
    viewBox="0 0 469.038 469.038"
  >
    <g>
      <path
        d="M465.023,4.079c-3.9-3.9-9.9-5-14.9-2.8l-442,193.7c-4.7,2.1-7.8,6.6-8.1,11.7s2.4,9.9,6.8,12.4l154.1,87.4l91.5,155.7
  		c2.4,4.1,6.9,6.7,11.6,6.7c0.3,0,0.5,0,0.8,0c5.1-0.3,9.5-3.4,11.6-8.1l191.5-441.8C470.123,13.879,469.023,7.979,465.023,4.079z
  		 M394.723,54.979l-226.2,224.7l-124.9-70.8L394.723,54.979z M262.223,425.579l-74.5-126.9l227.5-226L262.223,425.579z"
      />
    </g>
  </svg>
)

export const FanIcon = ({
  size = 25,
  color = colors.midnight,
  direction = 'left',
  style
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    css={css`
      ${style}
    `}
    viewBox="0 0 295.182 295.182"
  >
    <path
      d="M200.499,124.4c7.97-2.797,16.318-1.474,25.258,0.49c5.901,1.3,12.006,2.648,18.854,2.648
  	c9.165,0,17.745-2.51,26.232-7.669c13.081-7.954,22.03-22.183,23.94-38.061c2.178-18.143-4.619-36.142-19.146-50.667
  	c-14.42-14.42-33.67-22.357-54.203-22.357c-20.955,0-40.715,8.22-55.642,23.143c-18.656,18.657-30.793,48.403-31.003,75.684
  	c-4.439-3.231-8.37-7.189-10.389-12.929c-3.125-8.877-1.449-16.469,0.488-25.259c2.658-12.04,5.96-27.025-5.019-45.087
  	C110.743,9.334,93.657,0.011,75.274,0.011c-15.858,0-31.53,6.938-44.131,19.534C1.076,49.622,1.436,98.898,31.934,129.39
  	c18.411,18.416,48.665,30.816,75.601,31.119c-3.221,4.395-7.159,8.266-12.851,10.272c-7.957,2.808-16.306,1.493-25.261-0.489
  	c-5.899-1.299-12.004-2.649-18.856-2.649c-9.161,0-17.742,2.508-26.228,7.667c-13.081,7.956-22.03,22.184-23.94,38.063
  	c-2.179,18.143,4.622,36.143,19.145,50.666c14.419,14.42,33.671,22.356,54.205,22.356c20.954,0,40.716-8.22,55.642-23.142
  	c18.656-18.657,30.792-48.402,31.004-75.683c4.436,3.23,8.367,7.189,10.389,12.927c3.124,8.877,1.449,16.469-0.49,25.26
  	c-2.658,12.039-5.96,27.025,5.02,45.087c9.126,15.004,26.213,24.327,44.596,24.327c15.859,0,31.531-6.939,44.132-19.534
  	c30.061-30.071,29.708-79.347-0.792-109.845c-18.411-18.418-48.666-30.817-75.599-31.118
  	C190.869,130.277,194.809,126.406,200.499,124.4z M160.187,160.187c-6.727,6.727-18.465,6.727-25.192,0
  	c-6.943-6.948-6.943-18.244,0-25.192c3.363-3.363,7.836-5.215,12.596-5.215c4.761,0,9.232,1.852,12.597,5.215
  	C167.129,141.943,167.129,153.239,160.187,160.187z"
    />
  </svg>
)

export const DollarIcon = ({
  size = 25,
  color = colors.midnight,
  direction = 'left',
  style
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    css={css`
      ${style}
    `}
    viewBox="0 0 511.613 511.613"
  >
    <g>
      <path
        d="M385.261,311.475c-2.471-8.367-5.469-15.649-8.99-21.833c-3.519-6.19-8.559-12.228-15.13-18.134
  		c-6.563-5.903-12.467-10.657-17.702-14.271c-5.232-3.617-12.419-7.661-21.557-12.137c-9.13-4.475-16.364-7.805-21.689-9.995
  		c-5.332-2.187-13.045-5.185-23.134-8.992c-8.945-3.424-15.605-6.042-19.987-7.849c-4.377-1.809-10.133-4.377-17.271-7.71
  		c-7.135-3.328-12.465-6.28-15.987-8.848c-3.521-2.568-7.279-5.708-11.277-9.419c-3.998-3.711-6.805-7.661-8.424-11.848
  		c-1.615-4.188-2.425-8.757-2.425-13.706c0-12.94,5.708-23.507,17.128-31.689c11.421-8.182,26.174-12.275,44.257-12.275
  		c7.99,0,16.136,1.093,24.41,3.284s15.365,4.659,21.266,7.421c5.906,2.762,11.471,5.808,16.707,9.137
  		c5.235,3.332,8.945,5.852,11.136,7.565c2.189,1.714,3.576,2.855,4.141,3.427c2.478,1.903,5.041,2.568,7.706,1.999
  		c2.854-0.19,5.045-1.715,6.571-4.567l23.13-41.684c2.283-3.805,1.811-7.422-1.427-10.85c-1.144-1.142-2.566-2.473-4.291-3.997
  		c-1.708-1.524-5.421-4.283-11.136-8.282c-5.709-3.996-11.752-7.565-18.124-10.706c-6.379-3.138-14.661-6.328-24.845-9.562
  		c-10.178-3.239-20.697-5.426-31.549-6.567V9.136c0-2.663-0.855-4.853-2.563-6.567C282.493,0.859,280.303,0,277.634,0h-38.546
  		c-2.474,0-4.615,0.903-6.423,2.712s-2.712,3.949-2.712,6.424v51.391c-29.884,5.708-54.152,18.461-72.805,38.256
  		c-18.651,19.796-27.98,42.823-27.98,69.092c0,7.803,0.812,15.226,2.43,22.265c1.616,7.045,3.616,13.374,5.996,18.988
  		c2.378,5.618,5.758,11.136,10.135,16.562c4.377,5.424,8.518,10.088,12.419,13.988c3.903,3.899,8.995,7.945,15.274,12.131
  		c6.283,4.19,11.66,7.571,16.134,10.139c4.475,2.56,10.422,5.52,17.843,8.843c7.423,3.333,13.278,5.852,17.561,7.569
  		c4.283,1.711,10.135,4.093,17.561,7.132c10.277,3.997,17.892,7.091,22.84,9.281c4.952,2.19,11.231,5.235,18.849,9.137
  		c7.611,3.898,13.176,7.468,16.7,10.705c3.521,3.237,6.708,7.234,9.565,11.991s4.288,9.801,4.288,15.133
  		c0,15.037-5.853,26.645-17.562,34.823c-11.704,8.187-25.27,12.279-40.685,12.279c-7.036,0-14.084-0.757-21.124-2.279
  		c-24.744-4.955-47.869-16.851-69.377-35.693l-0.571-0.571c-1.714-2.088-3.999-2.946-6.851-2.563
  		c-3.046,0.38-5.236,1.523-6.567,3.43l-29.408,38.54c-2.856,3.806-2.663,7.707,0.572,11.704c0.953,1.143,2.618,2.86,4.996,5.14
  		c2.384,2.289,6.81,5.852,13.278,10.715c6.47,4.856,13.513,9.418,21.128,13.706c7.614,4.281,17.272,8.514,28.98,12.703
  		c11.708,4.182,23.839,7.131,36.402,8.843v49.963c0,2.478,0.905,4.617,2.712,6.427c1.809,1.811,3.949,2.711,6.423,2.711h38.546
  		c2.669,0,4.859-0.855,6.57-2.566s2.563-3.901,2.563-6.571v-49.963c30.269-4.948,54.87-17.939,73.806-38.972
  		c18.938-21.033,28.41-46.11,28.41-75.229C388.994,328.801,387.759,319.855,385.261,311.475z"
      />
    </g>
  </svg>
)

export const RepeatIcon = ({
  size = 25,
  color = colors.midnight,
  direction = 'left',
  style
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    css={css`
      ${style}
    `}
    viewBox="0 0 140.171 140.171"
  >
    <g>
      <g>
        <path
          d="M31.987,90.618c-11.048-5.12-17.97-12.437-17.97-20.564c0-13.055,17.882-23.996,42.051-27.11V28.848
  				C24.078,32.746,0,49.713,0,70.054c0,11.729,8.021,22.303,20.925,29.92C35.043,108.604,42.051,94.588,31.987,90.618z
  				 M116.155,38.416c-7.521-6.906-18.035,3.607-10.865,9.822c12.724,5.14,20.865,13.004,20.865,21.816
  				c0,13.062-17.885,24.004-42.052,27.117v14.09c31.99-3.892,56.068-20.858,56.068-41.207
  				C140.171,57.423,130.853,46.116,116.155,38.416z M62.261,52.461L85.075,38.8c3.319-1.988,3.326-5.226,0.018-7.228L62.068,17.637
  				c-3.312-1.999-5.985-0.489-5.969,3.381l0.124,28.034C56.233,52.923,58.938,54.449,62.261,52.461z M78.104,87.723L55.08,101.657
  				c-3.311,2.002-3.304,5.24,0.019,7.229l22.811,13.661c3.319,1.984,6.03,0.462,6.047-3.412l0.12-28.034
  				C84.089,87.233,81.413,85.725,78.104,87.723z"
        />
      </g>
    </g>
  </svg>
)
