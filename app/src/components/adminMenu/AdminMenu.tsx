import React, { useState, useRef, useEffect } from 'react';
import {
  MenuContainer,
  MenuButton,
  MenuIcon,
  Dropdown,
  DropdownSection,
  SectionTitle,
  Input,
  RadioGroup,
  RadioLabel,
  RadioInput,
  ApplyButton,
} from './AdminMenuStyled';

interface AdminMenuProps {
  currentLocation: string;
  currentUnits: 'metric' | 'imperial';
  onApply: (location: string, units: 'metric' | 'imperial') => void;
}

export const AdminMenu: React.FC<AdminMenuProps> = ({
  currentLocation,
  currentUnits,
  onApply,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(currentLocation);
  const [units, setUnits] = useState<'metric' | 'imperial'>(currentUnits);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleApply = () => {
    onApply(location, units);
    setIsOpen(false);
  };

  return (
    <MenuContainer ref={menuRef}>
      <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Admin settings">
        <MenuIcon>⚙</MenuIcon>
      </MenuButton>
      {isOpen && (
        <Dropdown>
          <DropdownSection>
            <SectionTitle>Location</SectionTitle>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city name"
            />
          </DropdownSection>
          <DropdownSection>
            <SectionTitle>Units</SectionTitle>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="units"
                  value="imperial"
                  checked={units === 'imperial'}
                  onChange={() => setUnits('imperial')}
                />
                Imperial (°F, mph)
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="units"
                  value="metric"
                  checked={units === 'metric'}
                  onChange={() => setUnits('metric')}
                />
                Metric (°C, km/h)
              </RadioLabel>
            </RadioGroup>
          </DropdownSection>
          <ApplyButton onClick={handleApply}>Apply</ApplyButton>
        </Dropdown>
      )}
    </MenuContainer>
  );
};
