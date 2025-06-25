import './index.css';
import Label from '../../Label';
import Utilities from '../../../utilities';

export interface TableHeaderProps {
	headers: string[];
}

const TableHeader = (props: TableHeaderProps) => {

	const { headers } = props;

	return (
		<thead className='tableHeader'>
			<tr>
				{headers.map((header) => {
					return <th><Label text={Utilities.string.toReadableText(header)} bold /></th>;
				})}
			</tr>
		</thead>


	);
};

export default TableHeader;