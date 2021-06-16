import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      // width={432}
      // height={70}
      viewBox="0 0 432 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.34 54.272c9.658 0 16.865-4.8 17.013-13.882.074-12.7-21.397-19.641-21.397-30.939 0-3.1 1.783-5.168 5.126-5.168 2.6 0 5.275 1.846 6.241 4.06 1.412 3.028 3.566 7.533 5.052 11.003h.966c1.04-5.243 2.006-9.6 3.27-14.03-3.864-1.255-8.62-2.067-14.414-2.067C5.572 3.249.074 8.713.074 15.876c0 13.807 21.546 19.789 21.546 31.603 0 3.766-2.303 5.76-5.943 5.76-2.972 0-5.87-2.585-6.91-4.652-2.898-5.022-4.83-8.861-7.058-13.218H.743C.669 40.981.446 46.593 0 51.688c2.972 1.698 9.659 2.584 14.34 2.584zM69.928 68.302c-1.114-.222-1.634-.739-1.634-1.773-.372-12.848-.52-40.537.074-48.364l-.817-.074a14.933 14.933 0 01-2.23 3.396c-2.674-2.067-6.983-3.692-11.812-3.692-11.07 0-18.426 8.197-18.426 21.266 0 10.338 4.83 15.211 12.408 15.211 3.046 0 5.87-1.107 9.658-3.396 0 5.464 0 11.002-.074 15.654 0 1.033-.52 1.624-1.635 1.92l-1.708.147v.96h18.202v-.96l-2.006-.295zM53.212 51.097c-4.607 0-6.687-5.907-6.687-16.466 0-11.667 2.154-15.728 5.572-15.728 3.27 0 5.052 3.766 5.052 8.64v22.003c-1.486 1.034-2.674 1.551-3.937 1.551zM108.821 51.466c-1.412-.221-2.006-.886-2.08-2.437-.223-8.786-.223-20.305 0-30.495l-.743-.222-13.82.517v.96l2.007.295c.965.222 1.411.739 1.411 1.846.297 8.049.372 18.165.149 25.918-1.635 1.772-3.64 3.028-5.721 3.028-2.972 0-3.864-2.732-3.938-6.572-.223-7.68-.223-15.654.075-25.77l-.743-.222-13.968.517v.96l1.931.295c1.04.222 1.635.739 1.635 1.846.297 7.532.074 16.614.074 23.555-.074 5.907 3.344 8.861 8.47 8.861 4.83 0 8.693-2.289 10.996-3.987l1.486-.96.743 4.43.669.074c4.68-.665 8.618-1.108 12.704-1.477v-.886l-1.337-.074zM145.022 51.466c-1.264-.221-1.932-.738-2.006-2.437-.149-4.873-.075-13.955 0-20.748.074-7.015-4.755-10.633-13.225-10.633-5.498 0-11.739 2.363-17.163 5.538l4.83 9.599h.891c1.263-3.544 2.303-6.055 3.863-9.23 1.858-3.766 3.344-4.726 5.053-4.726 2.526 0 4.309 2.732 4.383 10.264v2.806c-3.938.96-8.098 2.215-10.55 3.101-5.944 2.215-9.733 5.538-9.733 10.78 0 5.022 3.789 8.418 9.139 8.418 3.863 0 7.132-1.403 11.441-4.504l.743 4.357.446.073c4.606-.738 9.139-1.255 13.225-1.624v-.886l-1.337-.148zm-17.98-.369c-2.452 0-3.864-2.437-3.864-7.384 0-4.283 1.709-7.753 4.384-9.23 1.263-.664 2.526-1.255 4.16-1.55 0 5.685.075 11.888-.074 15.358-1.486 1.92-3.195 2.806-4.606 2.806zM164.419 53.534v-.886l-1.485-.222c-1.338-.295-1.709-1.034-1.709-2.658-.223-16.836-.372-30.496-.223-49.768h-.743c-4.681.886-9.807 1.55-14.562 1.994v.886c.817.074 1.709.147 2.526.295 1.337.222 1.709.812 1.783 2.141.297 11.815.52 29.61.149 44.378 0 1.772-.446 2.437-1.709 2.732l-1.412.222v.886h17.385zM197.101 34.852c1.189-9.746-4.309-17.204-14.042-17.204-9.584 0-16.717 7.31-16.717 18.607 0 10.485 6.39 17.943 16.865 17.943 7.059 0 11.516-3.47 13.374-10.19l-.52-.59c-1.709 1.55-4.31 2.215-6.984 2.215-6.018 0-9.956-3.397-11.368-9.6 6.241.075 12.779 0 18.649-.22l.743-.96zm-19.614.222c-.298-1.55-.446-3.25-.446-5.095 0-6.941 2.229-11.298 5.2-11.298 3.344 0 4.904 8.787 3.938 16.245-2.823.148-5.646.148-8.692.148zM205.192 54.272c3.418 0 5.721-2.363 5.721-5.39 0-3.028-2.452-5.243-5.721-5.243-3.417 0-5.646 2.51-5.646 5.243 0 2.88 2.154 5.39 5.646 5.39zM257.691 52.426c-1.561-.148-2.229-.812-2.824-2.363-5.869-15.58-11.293-31.455-16.642-47.11l-5.944 1.994-11.887 33.745c-.818 2.215-2.081 4.504-4.235 8.122-1.189 1.994-2.526 4.062-3.789 5.76v.96h14.487v-.96c-1.783-2.732-3.269-5.39-4.532-8.122-.966-1.846-1.486-3.619-.743-5.76l.966-2.732c5.201.221 9.807.221 14.934.074 1.56 4.356 2.972 8.639 4.532 13.29.594 1.773-.149 2.955-2.006 3.028l-1.783.222v.96h20.506v-.96l-1.04-.148zm-27.787-37.658c2.749 7.384 5.052 13.882 7.281 20.232-4.904.148-9.362.148-14.265-.074l6.984-20.158z"
        fill="#002217"
      />
      <path
        d="M290.787 21.266c-.074-1.403-.074-3.101 0-6.72h-.668c-2.378 2.29-5.275 4.43-7.876 5.834-2.451-1.625-5.795-2.585-9.955-2.585-9.585 0-15.38 5.021-15.38 11.888-.074 5.022 2.675 9.157 7.95 11.003-2.08 1.993-4.235 3.913-7.504 6.276.817 2.29 1.857 5.833 2.526 8.122.594 0 1.189 0 1.709-.073-2.229 2.953-5.498 6.793-8.47 10.263 3.492 2.954 9.956 4.726 17.46 4.726 11.441 0 20.134-6.055 20.134-15.432 0-3.766-1.411-9.304-16.419-9.304-4.681 0-7.727.074-12.482.221l3.938-4.504c1.783.517 3.789.812 6.092.812 9.584 0 15.379-5.02 15.454-11.74 0-3.545-1.338-6.72-3.938-8.861 2.154-.074 4.309 0 7.429.074zM272.51 40.76c-3.194 0-5.497-3.323-5.497-11.298 0-7.532 1.857-10.707 4.68-10.707 3.121 0 5.498 3.397 5.498 11.445 0 7.458-1.857 10.56-4.681 10.56zm15.454 18.902c0 2.954-2.823 4.505-7.058 4.505-5.721 0-16.717-2.215-21.174-4.578.965-1.625 2.005-3.175 2.971-4.578 3.715-.074 6.167-.074 8.322-.074 13.744 0 16.865 1.993 16.939 4.725zM322.049 34.852c1.189-9.746-4.309-17.204-14.042-17.204-9.584 0-16.717 7.31-16.717 18.607 0 10.485 6.39 17.943 16.866 17.943 7.058 0 11.516-3.47 13.373-10.19l-.52-.59c-1.709 1.55-4.309 2.215-6.984 2.215-6.018 0-9.956-3.397-11.367-9.6 6.241.075 12.779 0 18.648-.22l.743-.96zm-19.614.222c-.297-1.55-.446-3.25-.446-5.095 0-6.941 2.229-11.298 5.201-11.298 3.343 0 4.903 8.787 3.937 16.245-2.823.148-5.646.148-8.692.148zM360.898 52.426c-1.115-.295-1.635-.96-1.635-2.658-.223-8.344-.149-15.95-.074-23.407.148-5.834-3.492-8.64-8.47-8.64-4.904 0-8.767 2.511-10.847 3.692l-1.338.813-.371-4.43-.595-.075c-5.423.887-9.732 1.404-14.339 1.699l.075.886 1.56.074c1.337.295 2.229.886 2.303 2.658.223 9.23.223 18.238 0 26.73-.074 1.698-.52 2.363-1.709 2.658l-1.412.222v.886h17.906v-.886l-1.709-.222c-1.189-.295-1.634-.96-1.709-2.584-.297-8.344-.074-17.574.075-26.213 1.634-1.33 3.714-2.585 5.498-2.585 2.823 0 3.566 2.142 3.714 5.907.223 7.163.298 14.62 0 22.817 0 1.624-.445 2.363-1.634 2.658l-1.783.222v.886h17.905v-.886l-1.411-.222zM381.114 54.198c6.91 0 11.293-3.766 13.299-10.263l-.52-.517c-1.56 1.477-4.235 2.215-6.612 2.215-7.802 0-12.259-5.981-12.259-14.99 0-6.497 2.377-11.74 6.018-11.74 1.188 0 2.451 1.181 3.12 3.692.966 3.766 2.526 10.411 3.121 12.996h.891l7.207-15.728a36.423 36.423 0 00-12.333-2.142c-11.591 0-18.797 8.418-18.797 18.977 0 9.969 6.389 17.5 16.865 17.5z"
        fill="#002217"
      />
      <path
        d="M417.73 19.42c1.486 1.034 3.864 5.907 5.349 8.565.669 1.182.818 2.215.298 3.766-1.412 3.544-2.824 7.089-4.161 10.633-3.566-7.9-6.687-15.654-8.544-20.897-.372-1.033.074-1.846 1.412-1.92l1.783-.147v-.96H395.07v.96l1.188.147c1.189.148 1.784.591 2.304 1.699 4.829 10.337 10.624 23.702 15.23 35.074-.074.369-.223.664-.371 1.033-4.235 3.619-8.767 7.163-13.894 10.486l-.074.812c3.566.295 6.984.664 10.179 1.255l5.572-14.472c1.486-2.142 3.863-4.43 6.612-7.31a221.065 221.065 0 00-2.08-4.505l4.606-11.814c.966-2.363 2.081-4.43 3.344-6.646 1.486-2.584 3.269-5.095 4.16-5.76v-.96H417.73v.96z"
        fill="#002217"
      />
    </svg>
  )
}

export default SvgComponent
