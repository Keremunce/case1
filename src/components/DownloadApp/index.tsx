import './style.css';
const DownloadApp = () => {
    return (
        <div className="DownloadApp">
            <div className='IbanMobileApp'>
                <img src="/src/assets/ibanla-mobile-app.png" alt="" />
            </div>
            <div className='Content'>
                <div>
                    <div className='ContentQRImage'>
                        <img src="/src/assets/loryen-mobile-app-qr.png" alt="" />
                    </div>
                    <div className='ContentText'>
                        <h5>Download Our App</h5>
                        <p>Scan the QR code to download our mobile app.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/src/assets/Google_Play_Store.svg" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/Download_on_the_App_Store.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;