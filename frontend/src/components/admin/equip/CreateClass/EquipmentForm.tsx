// components/EquipmentForm.tsx
import React from 'react';
import Label from '../Label';
import Input from '../Input';
import Textarea from '../Textarea';
import DateTimePicker from '../DateTimePicker';

interface EquipmentFormProps {
    equipmentName: string;
    setEquipmentName: React.Dispatch<React.SetStateAction<string>>;
    equipmentDescription: string;
    setEquipmentDescription: React.Dispatch<React.SetStateAction<string>>;
    startDate: Date | null;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
    returnDate: Date | null;
    setReturnDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const EquipmentForm: React.FC<EquipmentFormProps> = ({
    equipmentName,
    setEquipmentName,
    equipmentDescription,
    setEquipmentDescription,
    startDate,
    setStartDate,
    returnDate,
    setReturnDate,
}) => (
    <div className="flex flex-col items-start ml-[40px]">
        <Label text="Equipment Name" />
        <Input
            placeholder="Enter Equipment Name"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
        />
        <Label text="Equipment Description" />
        <Textarea
            placeholder="Write Equipment Description"
            value={equipmentDescription}
            onChange={(e) => setEquipmentDescription(e.target.value)}
        />
        <DateTimePicker
            selectedDate={startDate || new Date()}
            onChange={(date) => setStartDate(date)}
            label="Start Date and Time:"
        />
        <DateTimePicker
            selectedDate={returnDate || new Date()}
            onChange={(date) => setReturnDate(date)}
            label="Return Date and Time:"
        />
    </div>
);

export default EquipmentForm;
