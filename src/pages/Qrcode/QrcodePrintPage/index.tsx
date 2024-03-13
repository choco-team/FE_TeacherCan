import { ForwardedRef, forwardRef } from 'react';

const QrCodePrintPage = forwardRef(
  (props = {}, ref: ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref}></div>;
  },
);

QrCodePrintPage.displayName = 'QrCodePrintPage';

export default QrCodePrintPage;
