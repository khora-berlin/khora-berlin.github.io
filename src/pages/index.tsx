import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import OrderButton from '../components/button/orderButton';

const IndexPage = () => (
	<React.Fragment>
		<Layout>
			<div>
				<OrderButton />
			</div>
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
