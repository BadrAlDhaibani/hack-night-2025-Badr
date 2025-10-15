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
  currentLocationName: string;
  currentUnits: 'metric' | 'imperial';
  onApply: (location: string, units: 'metric' | 'imperial') => void;
}

export const AdminMenu: React.FC<AdminMenuProps> = ({
  currentLocation,
  currentLocationName,
  currentUnits,
  onApply,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('');
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
    // If location is empty, use the current location
    const locationToApply = location.trim() === '' ? currentLocation : location;
    onApply(locationToApply, units);
    setIsOpen(false);
  };

  return (
    <MenuContainer ref={menuRef}>
      <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Admin settings">
        <MenuIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
          </svg>
        </MenuIcon>
      </MenuButton>
      {isOpen && (
        <Dropdown>
          <DropdownSection>
            <SectionTitle>Location</SectionTitle>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={currentLocationName}
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
