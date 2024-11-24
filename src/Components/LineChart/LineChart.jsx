import { LineChart as LC , Line ,XAxis,YAxis } from 'recharts';


const LineChart = () => {
    const marks =[
        { "id": 1, "name": "Alice", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 92 },
        { "id": 2, "name": "Bob", "mathMarks": 78, "physicsMarks": 82, "chemistryMarks": 88 },
        { "id": 3, "name": "Charlie", "mathMarks": 92, "physicsMarks": 89, "chemistryMarks": 94 },
        { "id": 4, "name": "Diana", "mathMarks": 74, "physicsMarks": 76, "chemistryMarks": 81 },
        { "id": 5, "name": "Edward", "mathMarks": 88, "physicsMarks": 84, "chemistryMarks": 86 },
        { "id": 6, "name": "Fiona", "mathMarks": 91, "physicsMarks": 93, "chemistryMarks": 89 },
        { "id": 7, "name": "George", "mathMarks": 76, "physicsMarks": 79, "chemistryMarks": 74 },
        { "id": 8, "name": "Hannah", "mathMarks": 89, "physicsMarks": 85, "chemistryMarks": 90 },
        { "id": 9, "name": "Ian", "mathMarks": 95, "physicsMarks": 92, "chemistryMarks": 97 },
        { "id": 10, "name": "Julia", "mathMarks": 82, "physicsMarks": 80, "chemistryMarks": 85 }
      ]
    return (
        <div>
            <LC width={800} height={400} data={marks}>
            <XAxis dataKey="name" />
            <YAxis />
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey={'physicsMarks'} stroke='yellow'></Line>
            </LC>
            
            
        </div>
    );
};

export default LineChart;