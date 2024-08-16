import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  modelWok = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'gouvernorat',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Localitaire', label: 'Localitaire' },
          { value: 'Proprietaire', label: 'Proprietaire' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'region',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Localitaire', label: 'Localitaire' },
          { value: 'Proprietaire', label: 'Proprietaire' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      }
    },
    {
      key: 'cite',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Localitaire', label: 'Localitaire' },
          { value: 'Proprietaire', label: 'Proprietaire' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      }
    },
    {
      key: 'code_postal',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'adresse',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Localitaire', label: 'Localitaire' },
          { value: 'Proprietaire', label: 'Proprietaire' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      }
    },
    {
      key: 'localitaire',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Localitaire', label: 'Localitaire' },
          { value: 'Proprietaire', label: 'Proprietaire' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'batiment',
      type: 'input',
      templateOptions: {
        options: [
          { value: 'Building1', label: 'Building 1' },
          { value: 'Building2', label: 'Building 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'mobilier',
      type: 'input',
      templateOptions: {
        options: [
          { value: 'Furniture1', label: 'Furniture 1' },
          { value: 'Furniture2', label: 'Furniture 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'habitation',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Habitation1', label: 'Habitation 1' },
          { value: 'Habitation2', label: 'Habitation 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'piece',
      type: 'input',
      templateOptions: {
        options: [
          { value: 'Piece1', label: 'Piece 1' },
          { value: 'Piece2', label: 'Piece 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
    {
      key: 'superficie',
      type: 'input',
      templateOptions: {
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      }
    },
    {
      key: 'construite',
      type: 'input',
      templateOptions: {
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      }
    },
    {
      key: 'dependance',
      type: 'select',
      templateOptions: {
        options: [
          { value: 'Furniture1', label: 'Furniture 1' },
          { value: 'Furniture2', label: 'Furniture 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSelect(field);
            });
          }
        }
      }
    },
  {
      key: 'nombre_dependance',
      type: 'input',
      templateOptions: {
        options: [
          { value: 'Furniture1', label: 'Furniture 1' },
          { value: 'Furniture2', label: 'Furniture 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToCheckbox(field);
            });
          }
        }
      }
    },
    {
      key: 'occupant',
      type: 'input',
      templateOptions: {
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
      hooks: {
        onInit: (field?: FormlyFieldConfig) => {
          if (field) {
            setTimeout(() => {
              this.convertInputToSwitchCheckbox(field);
            });
          }
        }
      }
    },
      
    {
      key: 'logement',
      type: 'input',
      templateOptions: {
        options: [
          { value: 'Furniture1', label: 'Furniture 1' },
          { value: 'Furniture2', label: 'Furniture 2' }
        ] as Array<{ value: string; label: string }>,
        required: true,
      },
      validation: {
        messages: {
          required: 'Ce champ est obligatoire.'
        }
      },
    },

  ];
  convertInputToSwitchCheckbox(field: FormlyFieldConfig) {
    const inputElement = document.querySelector(`[name="${field.key}"]`) as HTMLInputElement | null;
    if (inputElement) {
      // Create the switch structure
      const switchWrapper = document.createElement('div');
      switchWrapper.className = 'custom-control custom-switch';

      const switchInput = document.createElement('input');
      switchInput.type = 'checkbox';
      switchInput.className = 'custom-control-input';
      switchInput.id = `${field.key}-switch`;
      switchInput.name = inputElement.name;

      const switchLabel = document.createElement('label');
      switchLabel.className = 'custom-control-label';
      switchLabel.htmlFor = switchInput.id;
      switchLabel.textContent = 'OUI';

      switchWrapper.appendChild(switchInput);
      switchWrapper.appendChild(switchLabel);

      inputElement.replaceWith(switchWrapper);
    }
  }

  convertInputToCheckbox(field: FormlyFieldConfig) {
    const inputElement = document.querySelector(`[name="${field.key}"]`) as HTMLInputElement | null;
    if (inputElement) {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.className = 'checkbox-group';
  
      const options = field.templateOptions?.options as Array<{ value: string; label: string }>;
      options?.forEach(option => {
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'checkbox-item';
  
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.value = option.value;
  
        // Ensure field.key is a string before assigning it to checkboxElement.name
        if (typeof field.key === 'string') {
          checkboxElement.name = `${field.key}[]`;
        }
  
        const labelElement = document.createElement('label');
        labelElement.textContent = option.label;
        labelElement.className = 'checkbox-label';
  
        checkboxWrapper.appendChild(checkboxElement);
        checkboxWrapper.appendChild(labelElement);
        wrapperDiv.appendChild(checkboxWrapper);
      });
  
      inputElement.replaceWith(wrapperDiv);
    }
  }
  

  
  ngOnInit() {
    // Additional initialization logic if needed
  }

  convertInputToSelect(field: FormlyFieldConfig) {
    const inputElement = document.querySelector(`[name="${field.key}"]`) as HTMLInputElement | null;
    if (inputElement) {
      const selectElement = document.createElement('select');

      const options = field.templateOptions?.options as Array<{ value: string; label: string }>;
      options?.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectElement.appendChild(optionElement);
      });

      inputElement.replaceWith(selectElement);

      selectElement.className = inputElement.className;
      selectElement.name = inputElement.name;
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Le formulaire n\'est pas valide');
    } else {
      console.log(this.modelWok);
    }
  }
}
