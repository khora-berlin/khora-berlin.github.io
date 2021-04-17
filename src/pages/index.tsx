import * as React from 'react';
import Layout from '../components/layout/layout';
import OrderButton from '../components/button/orderButton';
import Gallery from '../components/instagram/gallery';

const IndexPage = () => (
	<React.Fragment>
		<Layout>
			<div>
				<OrderButton />
			</div>
			<Gallery />
			<article>
				MO-SO 12-10 PM! <br />
				ORDER FROM COOPCYCLE - WEB OR APP! <br />
				FOR QUESTIONS CALL 01759920141
			</article>
			<article>
				BE LAZY, SHOW SOLIDARITY. <br />
				ORDER WITH US - YOUR FAVOURITE COURIER COLLECTIVE, KHORA. <br />
				FROM BERLIN, FOR BERLIN. <br />
				FAIR AND WORKER OWNED.
			</article>
		</Layout>
	</React.Fragment>
);

export default IndexPage;
